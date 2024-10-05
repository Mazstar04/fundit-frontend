import { Field, FieldInputProps, FieldProps, FormikProps } from 'formik';
import { AddressInputComponent, BasicDropdown, BasicInput, SelectInputContainer, SelectInputOption } from '@components';
import { CustomInputProps } from './formik-input';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { PiEyeClosed } from "react-icons/pi";
import CountryCodes from '../../utils/CountryCodes';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function FormikInputField({ type, ...props }: CustomInputProps) {
  const [showpassword, setShowPassword] = useState(false);

  const defaultNumberCode = '+234';

  const [phone, setPhone] = useState(defaultNumberCode);


  const getInputField = (field: FieldInputProps<any>, form: FormikProps<any>) => {

    if (type == 'phone' && !field.value) {
      // form.setFieldValue(props.name, defaultNumberCode);

      field.value = defaultNumberCode;
    }

    return (
      <div className='relative w-full'>
          <BasicInput
            type={
              type === 'password' ? (showpassword ? 'text' : 'password') : type
            }
            {...field}
            {...props}
            name={props.name}
            label={props.label}
            className="flex-1 outline-none text-sm tracking-wider font-light"
          />
          {type === 'password' && showpassword && (
            <AiOutlineEyeInvisible
              onClick={() => setShowPassword(!showpassword)}
              className="cursor-pointer absolute right-4 top-4"
              size={18}
            />
          )}
          {type === 'password' && !showpassword && (
            <AiOutlineEye
              onClick={() => setShowPassword(!showpassword)}
              className="cursor-pointer absolute right-4 top-4"
              size={18}
            />
          )}
        </div>
    )
  }

   const getCountryFlag = (countryCode: string) => {
    // const flagOffset = 0x1f1e6;
    // const asciiOffset = 0x41;
    // const firstChar = country.codePointAt(0)! - asciiOffset + flagOffset;
    // const secondChar = country.codePointAt(1)! - asciiOffset + flagOffset;

    // const flag =
    //   String.fromCodePoint(firstChar) + String.fromCodePoint(secondChar);
    return `https://flagcdn.com/w2560/${countryCode}.png`;
  };

  let selectedInputField = getInputField;

  const getAddressInputField = (field: FieldInputProps<any>, form: FormikProps<any>) => {

    let countryCode;

    if (form.values.country) {
      countryCode = (CountryCodes.find(c => c.name.toLowerCase() === form.values.country.toLowerCase()))?.code
    }

    const handlePlaceSelection = (place: any) => {


      form.setFieldValue(props.name, place.place_id)

      // //setting the country 
      // const country = place.address_components.find((a: any) => a.types.includes('country'))
      // if (country) form.setFieldValue('country', country.long_name)

      // //setting the city
      // const city = place.address_components.find((a: any) => a.types.includes('locality'))
      // if (city) form.setFieldValue('city', city.long_name)

      // //setting the state
      // const state = place.address_components.find((a: any) => a.types.includes('administrative_area_level_1'))
      // if (state) form.setFieldValue('state', state.long_name)

      // //setting the postal code
      // const postalCode = place.address_components.find((a: any) => a.types.includes('postal_code'))
      // if (postalCode) form.setFieldValue('postalCode', postalCode.long_name)


      // if (props.config?.formattedAddressName) {
      //   form.setFieldValue(props.config?.formattedAddressName, place.formatted_address)
      // }

    }

    return <AddressInputComponent countryCode={countryCode} onSelect={handlePlaceSelection} />

  }

  switch (type) {
    case "address":
      selectedInputField = getAddressInputField;
      break;

  }


  return (
    <Field name={props.name}>
      {({ field, meta, form }: FieldProps) => {
        return (
          <div className="flex w-full ">

            {type == 'phone' && <BasicDropdown
              name=''
              placeholder={''}
              value={phone}
              onChange={(item: any) => {
                form.setFieldValue(props.name, item.value);
                setPhone(item.value)
              }}
              options={CountryCodes.map(c => ({
                value: c.dial_code,
                label: (
                  <div className="flex items-center">
                    <img
                      src={getCountryFlag(c.code.toLowerCase())}
                      alt={c.code}
                      className="w-4 h-3 mr-2" 
                    />
                    {`${c.dial_code}`}
                  </div>
                ),
              }))}
              isSearchable
              displayWidth='130px'
              dropdownWidth='130px'
              isDisabled={props.disabled}
            />}

            {selectedInputField(field, form)}

          </div>
        )
      }}
    </Field>
  );
}