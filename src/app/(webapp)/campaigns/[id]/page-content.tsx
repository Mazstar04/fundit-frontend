"use client";
import { Breadcrumb } from "@/components";
import { CampaignDetailContainer } from "@/containers";
import { ICampaign } from "@/interfaces";

const PageContent = () => {
  
  const breadcrumbs = [
    { label: "Menu", path: "/" },
    { label: "Campaigns", path: "/dashboard/campaigns" },
    { label: "Campaign Detail" },
  ];

  const campaign: ICampaign = {
    id: "1",
    title: "Help Build a School",
    coverImagePath: "/images/tour1.png",
    imagePaths: [
      "/images/tour2.png",
      "/images/tour3.png",
      "/images/tour4.png",
      "/images/tour2.png",
      "/images/tour3.png",
      "/images/tour4.png",
    ],
    shortDescription:
      "This campaign aims to raise enough funds to build a school in a rural community to improve access to education.",
    description: `
### Help Build a School

#### Overview
This campaign aims to raise enough funds to build a school in a rural community to improve access to education. Education is a fundamental right, yet many children in rural areas do not have access to basic educational facilities. This project is designed to create a safe, nurturing, and stimulating environment for children to learn and grow.

#### The Need
In many rural communities, children face numerous barriers to education, including lack of infrastructure, qualified teachers, and learning materials. By building a school, we can provide these children with the resources they need to succeed academically and socially.

#### Goals
- **Raise Funds:** Our primary goal is to raise **₦50,000** for the construction of the school building, purchase of furniture, and educational materials.
- **Community Engagement:** Engage local community members in the project to foster a sense of ownership and responsibility for the school.
- **Long-term Impact:** Ensure that the school serves the community for years to come, providing education to generations of children.

#### How You Can Help
Your contribution, no matter how small, can make a significant difference in the lives of these children. Here’s how you can help:

- **Donate:** Every Naira counts! Help us reach our goal by donating to our campaign.
- **Spread the Word:** Share this campaign with your friends and family. The more people who know about it, the more support we can gather.
- **Volunteer:** If you're interested in volunteering your time or skills to help with the project, please reach out to us!

#### Conclusion
Together, we can make a difference. Let’s give these children the opportunity to learn, grow, and achieve their dreams. Thank you for your support!

---
For any inquiries or further information, feel free to contact us at **info@helpbuildaschool.org**.
`,
    created: "2024-10-01",
    amount: 50000,
    amountRaised: 15000,
    fullName: "John Doe",
    totalPayment: 1500,
  };


  return (
    <div className="flex flex-col gap-3 md:gap-4 font-urbanist">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <CampaignDetailContainer campaign={campaign}/>
    </div>
  );
};

export default PageContent;
