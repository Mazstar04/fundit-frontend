import { CampaignCard, PaginationComponent } from "@/components";
import { usePaging } from "@/hooks";
import { ICampaign } from "@/interfaces";

const CampaignCardContainer = ({ isGuest = false }: { isGuest?: boolean }) => {
  const paging = usePaging();
  const campaigns: ICampaign[] = [
    {
      id: "1",
      title: "Help Build a School",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Raising funds to build a school in a rural area.",
      description:
        "This campaign aims to raise enough funds to build a school in a rural community to improve access to education.",
      created: "2024-10-01",
      amount: 50000,
      amountRaised: 15000,
      fullName: "John Doe",
      totalPayment: 1000,
    },
    {
      id: "2",
      title: "Water Well Construction",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Provide clean water by constructing a water well.",
      description:
        "This project aims to construct a water well in a drought-affected area, giving the community access to clean water.",
      created: "2024-10-02",
      amount: 20000,
      amountRaised: 5000,
      fullName: "Jane Smith",
      totalPayment: 1000,
    },
    {
      id: "3",
      title: "Medical Supplies for Hospitals",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription:
        "Raise funds to supply medical equipment to local hospitals.",
      description:
        "Hospitals are in urgent need of medical equipment and supplies. This campaign will help bridge that gap.",
      created: "2024-10-03",
      amount: 30000,
      amountRaised: 12000,
      fullName: "Samuel Adams",
      totalPayment: 1000,
    },
    {
      id: "4",
      title: "Support Local Farmers",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription:
        "Help farmers buy seeds and equipment to improve crop yield.",
      description:
        "By supporting local farmers with seeds and equipment, we can ensure sustainable food production in rural areas.",
      created: "2024-10-04",
      amount: 10000,
      amountRaised: 4000,
      fullName: "Lucy Green",
      totalPayment: 1000,
    },
    {
      id: "5",
      title: "Scholarship Fund for Students",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Provide scholarships for underprivileged students.",
      description:
        "This fund will help underprivileged students gain access to higher education by providing scholarships.",
      created: "2024-10-05",
      amount: 25000,
      amountRaised: 7000,
      fullName: "Michael Brown",
      totalPayment: 1000,
    },
    {
      id: "6",
      title: "Community Library Project",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription:
        "Create a community library for everyone to access books.",
      description:
        "A community library will give people access to knowledge and learning materials, fostering a culture of reading.",
      created: "2024-10-06",
      amount: 15000,
      amountRaised: 6000,
      fullName: "Alice Johnson",
      totalPayment: 1000,
    },
    {
      id: "7",
      title: "Environmental Cleanup Campaign",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Raise funds to clean up local parks and rivers.",
      description:
        "This campaign will organize volunteers and purchase necessary tools to clean up parks and rivers, improving the environment.",
      created: "2024-10-07",
      amount: 8000,
      amountRaised: 2500,
      fullName: "Tom Harris",
      totalPayment: 1000,
    },
    {
      id: "8",
      title: "Support for Orphanage",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Provide essentials to an orphanage home.",
      description:
        "The orphanage needs help with daily supplies, including food, clothes, and books. Your donations will make a difference.",
      created: "2024-10-08",
      amount: 12000,
      amountRaised: 4000,
      fullName: "Emma Stone",
      totalPayment: 1000,
    },
    {
      id: "9",
      title: "Animal Shelter Funding",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription: "Help care for homeless animals.",
      description:
        "This animal shelter needs funds for food, veterinary care, and general maintenance to keep helping abandoned animals.",
      created: "2024-10-09",
      amount: 9000,
      amountRaised: 9000,
      fullName: "Charlie Moore",
      totalPayment: 1000,
    },
    {
      id: "10",
      title: "Disaster Relief Fund",
      coverImagePath: "/images/tour1.png",
      imagePaths: [
        "/images/tour2.png",
        "/images/tour3.png",
        "/images/tour4.png",
      ],
      shortDescription:
        "Provide urgent relief to those affected by natural disasters.",
      description:
        "Donations will go towards food, shelter, and medical care for communities affected by natural disasters.",
      created: "2024-10-10",
      amount: 40000,
      amountRaised: 15000,
      fullName: "Sophia Davis",
      totalPayment: 1000,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        {campaigns.map((t, index) => (
          <CampaignCard
            isGuest={isGuest}
            campaign={t}
            key={Math.random() * 3}
          />
        ))}
      </div>
      <PaginationComponent paging={paging} isTable={false} />
    </div>
  );
};

export default CampaignCardContainer;
