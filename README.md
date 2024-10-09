# Fund It - Donation Platform

**Fund It** is a donation-based platform designed to allow users to create and manage fundraising campaigns effortlessly. It integrates Paystack for secure donation processing and offers a user-friendly interface for managing donations and withdrawing funds.

## Features

### 1. User Registration & Authentication
- Users can sign up and log in securely.
- Authentication is handled through secure methods ensuring data privacy and safety.

### 2. Campaign Creation
- Registered users can create fundraising campaigns.
- Each campaign requires a **Title**, **Description**, **Target Amount**, and a **Campaign Image**.
- Every campaign is given a unique, shareable link.

### 3. Campaign Donations
- External users can donate to any campaign using the campaign link.
- Payments are processed securely through **Paystack**, ensuring safe transactions for donors.

### 4. Campaign Management
- Campaign owners can track all donations made to their campaigns.
- A detailed record of contributors is available, providing transparency and insight into donor information.
- Users can monitor the progress of their fundraising efforts against their target amount.

### 5. Wallet & Withdrawals
- Donations are stored in the user's wallet.
- Users can withdraw funds accumulated in their wallets at any time.

### 6. Dashboard
- A personalized dashboard gives users a comprehensive overview of their campaigns.
- The dashboard includes donation history, campaign performance, and financial activity insights.

## Tech Stack

- **Backend**: .NET Web API
- **Frontend**: Next.js (TypeScript)
- **Database**: PostgreSQL
- **Payment Gateway**: Paystack API

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mazstar04/fundit-frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd fund-it
   ``` 
3. Install dependencies:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn dev
   ``` 

## Usage

1. **User Registration**: Sign up to create an account.
2. **Create Campaign**: Once logged in, navigate to the campaign creation page to start your fundraiser.
3. **Share Campaign**: Share the unique link generated with potential donors.
4. **Receive Donations**: Donations can be made via Paystack through the campaign page.
5. **Monitor Campaign**: View donation history and campaign progress through your dashboard.
6. **Withdraw Funds**: Withdraw the collected donations from your wallet.
