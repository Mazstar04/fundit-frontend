"use client";
import { BasicButton } from "@/components";
import { FormikForm, FormikInput } from "@containers";
import { FormikHelpers, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const WithdrawMoneyForm = ({ maxWithdrawal }: { maxWithdrawal: number }) => {
  const [bankOptions, setBankOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedBankCode, setSelectedBankCode] = useState<string>("");

  const initialValues = {
    bankName: "",
    bankCode: "",
    accountNo: "",
    accountName: "",
    amount: "",
  };

  // Form validation schema
  const WithdrawMoneySchema = Yup.object().shape({
    bankName: Yup.string().required("Select Bank"),
    accountNo: Yup.string().required("Account number is required"),
    accountName: Yup.string().required("Account name is required"),
    amount: Yup.number()
      .required("Amount is required")
      .max(maxWithdrawal, `Insufficient wallet balance`),
  });

  const PAYSTACK_KEY = "sk_test_79e68e6100a58bec3e75aaf1782fb5fa407ad7b0";

  // Fetch bank options from Paystack
  useEffect(() => {
    const fetchBankOptions = async () => {
      try {
        const response = await axios.get("https://api.paystack.co/bank", {
          headers: {
            Authorization: `Bearer ${PAYSTACK_KEY}`,
          },
        });

        const banks = response.data.data.map((bank: any) => ({
          label: bank.name,
          value: bank.code,
        }));

        setBankOptions(banks);
      } catch (error) {
        console.error("Error fetching bank options:", error);
      }
    };

    fetchBankOptions();
  }, []);

  const resolveAccountName = async (bankCode: string, accountNo: string) => {
    try {
      const response = await axios.get(`https://api.paystack.co/bank/resolve`, {
        params: { account_number: accountNo, bank_code: bankCode },
        headers: {
          Authorization: `Bearer ${PAYSTACK_KEY}`,
        },
      });

      return response.data.data.account_name;
    } catch (error: any) {
      toast.error(
        error.response.data.message ??
          "Any error occured while fetching account name"
      );
      return "";
    }
  };

  const handleSubmit = async (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    const data = {
      ...values,
      bankName: bankOptions.find((bank) => bank.value === values.bankName)
        ?.label,
    };
    console.log("Form values:", data);
  };

  return (
    <FormikForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={WithdrawMoneySchema}
    >
      <WithdrawMoneyFields
        bankOptions={bankOptions}
        resolveAccountName={resolveAccountName}
        maxWithdrawal={maxWithdrawal}
      />
    </FormikForm>
  );
};

interface WithdrawMoneyFieldsProps {
  bankOptions: { label: string; value: string }[];
  resolveAccountName: (bankCode: string, accountNo: string) => Promise<string>;
  maxWithdrawal: number;
}

const WithdrawMoneyFields: React.FC<WithdrawMoneyFieldsProps> = ({
  bankOptions,
  resolveAccountName,
  maxWithdrawal,
}) => {
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const [selectedBankCode, setSelectedBankCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const accountNoMeta = getFieldMeta("accountNo");
  const validAccountLength = 10;

  return (
    <div className="mx-auto md:w-[90%] mt-4 flex flex-col gap-6">
      <FormikInput
        type="dropdown"
        label="Bank Name"
        name="bankName"
        placeholder="Select Bank"
        isSearchable
        options={bankOptions}
        onChange={async (e: any) => {
          setFieldValue("bankName", e);
          const selectedBank = bankOptions.find((bank) => bank.value === e);
          const bankCode = selectedBank?.value || "";
          setSelectedBankCode(bankCode);
          setFieldValue("bankCode", bankCode);
          if ((accountNoMeta.value as string).length === validAccountLength) {
            setLoading(true);
            const accountName = await resolveAccountName(
              bankCode,
              accountNoMeta.value as string
            );
            setFieldValue("accountName", accountName);
            setLoading(false);
          }
        }}
        required
      />

      <FormikInput
        type="text"
        label="Account Number"
        name="accountNo"
        maxLength={10}
        placeholder="Enter account number"
        onBlur={async (e: any) => {
          const accountNo = e.target.value;

          if (accountNo.length === validAccountLength) {
            setLoading(true);
            const accountName = await resolveAccountName(
              selectedBankCode,
              accountNo
            );
            setFieldValue("accountName", accountName);
            setLoading(false);
          } else {
            setFieldValue("accountName", "");
          }
        }}
        required
      />
      <div>
        {loading && (
          <div className="text-light-gray text-[12px] font-urbanist flex gap-1 items-center">
            <AiOutlineLoading3Quarters size={10} className="animate-spin" />
            Fetching account name
          </div>
        )}
        <FormikInput
          type="text"
          label="Account Name"
          name="accountName"
          placeholder="Account name will appear here"
          disabled
          required
        />
      </div>

      {/* Amount */}
      <FormikInput
        min={1}
        max={maxWithdrawal}
        type="number"
        label="Amount"
        name="amount"
        placeholder="Enter amount to withdraw"
        required
      />
      <BasicButton className="mt-2 block w-full" text="Withdraw" />
    </div>
  );
};

export default WithdrawMoneyForm;
