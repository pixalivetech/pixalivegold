  import React, { useState } from "react";

  const categories = ["General", "Buy", "Sell", "Redeem", "Lease", "SIP", "Delivery"];
  const faqData = {
    General: [
      {
        question: "Eligibility Criteria",
        answer: "Any resident Indian with a valid PAN Card/Form 60, Aadhaar Card, and an active bank account in their name is eligible to enroll in Pixalive Gold Network.",
      },
      {
        question: "Gold Storage Charges",
        answer: "We offer free insured storage for up to 5 years. After that, a nominal annual storage fee may be charged (approximately 0.3% to 0.4% per annum of your gold balance).",
      },
      {
        question: "Is PAN Card Upload Mandatory?",
        answer: "PAN card upload is optional for smaller purchases, but mandatory for gold purchases exceeding ₹500 to comply with KYC norms.",
      },
      {
        question: "Why is KYC Required?",
        answer: "To ensure the safety and security of your digital gold. KYC protects your account from unauthorized access and enables higher transaction limits.",
      },
      {
        question: "Gold Purity",
        answer: "We offer 24 Karat gold of 9999 purity (99.99%), certified and authenticated.",
      },
      {
        question: "Tenures",
        answer: "There is no fixed tenure or mandatory contribution, unless you're part of a Pixalive Gold Savings Plan, where contributions start at just ₹100.",
      },
      {
        question: "Minimum & Maximum Purchase",
        answer: "Minimum Purchase: ₹10\nMaximum: No upper limit (subject to KYC compliance).",
      },
      {
        question: "How Can I View My Holdings?",
        answer: "Your holdings and transaction history can be viewed anytime on the Pixalive Gold dashboard. We also send quarterly balance statements via email.",
      },
      {
        question: "Joint Accounts",
        answer: "Joint accounts are not permitted under Pixalive Gold Network.",
      },
      {
        question: "Nomination",
        answer: "Nomination will follow the norms of Pixalive Gold Network. You can add or update nominees through your account.",
      },
      {
        question: "Buy/Sell Price of Gold",
        answer: "Prices are transparently published in real-time on our platform. Our gold price is benchmarked against wholesale bullion prices, inclusive of operational costs.",
      },
      {
        question: "Why Are Buy & Sell Prices Different?",
        answer: "The difference reflects:\n• Buy-sell spread in the bullion market\n• GST (applies to buy, not sell)\n• Logistics, insurance, trustee, and custodian charges",
      },
      {
        question: "Gold Custody",
        answer: "Your gold is held securely by our custodian partner MMTC-PAMP, one of India’s most trusted names in precious metals.",
      },
      {
        question: "Vault Insurance",
        answer: "Vaults are fully insured by the secure storage provider. Insurance also covers gold in transit until it reaches you.",
      },
      {
        question: "Customer Support",
        answer: "Reach us via email at support@pixalive.network or call our helpline. Our distributors handle first-level support, while our central team resolves escalated queries.",
      },
      {
        question: "Grievance Redressal",
        answer: "Pixalive Gold Network operates outside SEBI/RBI jurisdiction but follows strict customer protection policies. Our appointed Security Trustee ensures your gold is safeguarded independently.",
      },
      {
        question: "In the Event of Liquidation",
        answer: "Your gold is held in a secure, independent custodian facility and is not an asset of Pixalive Gold Network. The Security Trustee ensures delivery even in case of adverse events.",
      },
      {
        question: "Certification",
        answer: "All gold sold is certified with BIS Hallmark (24K, 999.9 purity) and assay tested by approved agencies.",
      },
      {
        question: "Lock-in Period",
        answer: "There’s no lock-in. However, Aadhaar verification is required for selling gold within 3 to 7 days of purchase.",
      },
      {
        question: "Price Benchmark",
        answer: "Our pricing includes all landed costs like logistics, insurance, and storage. Unlike MCX (which provides future prices), Pixalive Gold’s price is applicable pan-India and supports fractional grams.",
      },
      {
        question: "ID for Delivery",
        answer: "For deliveries of 5 grams or more, valid government ID proof is mandatory.",
      },
      {
        question: "Delivery by Someone Else",
        answer: "Only legal heirs may redeem gold on behalf of a deceased account holder, by providing proof of death and identity.",
      },
      {
        question: "In Case of Death",
        answer: "The legal heir may claim the account and its holdings by submitting necessary documents, including proof of relationship and identity.",
      },
      {
        question: "Changing Mobile Number",
        answer: "To update your registered mobile number, email us at support@pixalive.network with your KYC documents.",
      },
      {
        question: "Payment Deducted but Gold Not Credited?",
        answer: "Contact us immediately at support@pixalive.network. We’ll investigate and resolve the issue promptly.",
      },
    ],
    Buy: [
      {
        question: "How can I buy gold on Pixalive Gold Network?",
        answer: "You can purchase any amount of gold instantly through pixalive.network. Once your funds are received, gold (including applicable GST) is bought on your behalf and credited to your digital account up to 4 decimal places in grams.\n\nYou also have the freedom to request physical delivery of your gold at any time. The minimum quantity for delivery is 0.5 grams, as fractional deliveries are not physically feasible.",
      },
      {
        question: "Where can I find the invoice for each order?",
        answer: "An invoice is automatically sent to your registered email and mobile number after every transaction. You can also download it anytime from the ‘Transaction History’ section in your Pixalive Gold dashboard.",
      },
      {
        question: "Where is my gold stored after purchase?",
        answer: "Your gold is securely stored with MMTC-PAMP, our official vault and custodian partner. All customer gold purchases are held on a consolidated basis, with periodic audits conducted by an independent trustee to ensure complete transparency and accountability.",
      },
      {
        question: "I’m facing issues completing KYC. What should I do?",
        answer: "No worries—our support team is here to help. If you’re facing issues with your KYC verification, please reach out to us at:\n\n📧 support@pixalive.network",
      },
      {
        question: "Are there any KYC requirements for buying gold?",
        answer: "Yes, compliance with KYC is essential:\n• You can buy up to ₹500 worth of gold without PAN.\n• For purchases above ₹500, PAN is mandatory.\n• After submitting your PAN, a 7-day hold applies before selling your newly purchased gold.\n• If you complete Aadhaar-based KYC, this wait time reduces to just 3 days.",
      },
    ],
    Sell: [
      {
        question: "How do I sell my gold?",
        answer: "To sell your gold, you can initiate the sale through the Pixalive Gold Network platform. The price quote for your gold will be determined based on current market rates. You can sell any amount, starting from a minimum of 0.5 grams of gold. The sale proceeds, after deducting any applicable transaction charges (which will be disclosed in advance), will be sent to your verified bank account within 4 working days. In case of any market disruption, the sale quote may be temporarily unavailable.",
      },
      {
        question: "Where do I get the proceeds when I sell my gold?",
        answer: "When you sell your gold through Pixalive Gold Network, the proceeds will be sent to your verified bank account. You need to add and verify your bank account details prior to the sale. Once verified, your funds will be credited to your account after the gold sale.",
      },
      {
        question: "When will the sales proceeds be credited to my account?",
        answer: "The proceeds from your gold sale will be credited to your bank account within 4 working days. If the transaction occurs on a Friday, Saturday, or Sunday, you will receive the funds by Tuesday of the following week.",
      },
      {
        question: "What happens if the sales proceeds are not credited to me within 4 days?",
        answer: "If you do not receive your proceeds within 4 working days, please reach out to our customer service team at care@pixalive.network with your transaction details, and we will assist you in resolving the issue.",
      },
      {
        question: "I’m facing issues with bank account verification, what should I do?",
        answer: "If you're having trouble with bank account verification, please contact our support team at care@pixalive.network and provide a screenshot of the issue you're facing.",
      },
      {
        question: "Why does it take up to 4 days to receive the sale amount in my bank account?",
        answer: "The 4-day timeframe accounts for the verification of your bank account details, as well as the time needed for interbank transactions. We strive to transfer your funds as quickly as possible after the sale is completed.",
      },
      {
        question: "Are there any KYC requirements while selling gold?",
        answer: "For any gold sale above ₹500, PAN verification is required. If you haven't completed PAN verification, you'll need to do so before proceeding with the sale. Additionally, completing Aadhaar KYC can expedite the process and reduce any wait periods.",
      },
      {
        question: "Why do I have to wait before selling gold that I’ve bought?",
        answer: "To ensure security and prevent fraudulent activity, any gold purchased must be held for 7 days before it can be sold. If you complete Aadhaar KYC, this 7-day wait period can be reduced to 3 days.",
      },
      {
        question: "What is Aadhaar KYC verification?",
        answer: "Aadhaar KYC is a process where we authenticate your identity by verifying your Aadhaar card details. This includes triggering an OTP to your mobile number linked to Aadhaar and clicking a selfie that matches your Aadhaar photo.",
      },
      {
        question: "Why is Aadhaar KYC required for selling gold?",
        answer: "Aadhaar KYC is required if you want to sell your gold within 3 to 7 days of buying it. This helps us ensure that the transaction is secure and compliant.",
      },
      {
        question: "Can I reduce the 7-day wait period by doing Aadhaar KYC?",
        answer: "Yes, by completing Aadhaar KYC, you can reduce the 7-day wait period to just 3 days.",
      },
      {
        question: "What happens if my PAN and Aadhaar details do not match?",
        answer: "If there is a mismatch between your PAN and Aadhaar details, you will need to upload a copy of your PAN card and complete Aadhaar KYC. Our support team will review your case and respond within 3 business days.",
      },
      {
        question: "What if my PAN already exists in the system?",
        answer: "If your PAN is already in our system, you may dispute it by uploading your PAN card and completing Aadhaar KYC. Once verified, your PAN will be updated in your profile along with Aadhaar details.",
      },
      {
        question: "Is Aadhaar KYC mandatory for buying or selling gold?",
        answer: "Aadhaar KYC is not mandatory if your total lifetime sale amount is less than ₹500. For sales above ₹500, you will need to provide PAN details, and a 7-day wait period will apply unless you complete Aadhaar KYC, in which case the wait period can be reduced to 3 days.",
      },
      {
        question: "What happens if my Aadhaar details do not match my existing bank accounts?",
        answer: "If your Aadhaar details do not match the name on your bank account, the bank account will be disassociated from your profile. You will need to update your account details with a bank account or UPI VPA that matches your Aadhaar name.",
      },
      {
        question: "Can I add a bank account with a different name than my Aadhaar name?",
        answer: "No, you cannot add a bank account with a name that does not match your Aadhaar name.",
      },
      {
        question: "How long does it take for the amount to be credited if my lifetime sale amount is less than ₹500?",
        answer: "If your lifetime sale amount is less than ₹500, you can provide any valid bank account details or UPI VPA, and the sale proceeds will be credited to your account within 48 hours.",
      },
      {
        question: "What is the wait period for cumulative purchases above ₹500?",
        answer: "For cumulative purchases above ₹500, a 7-day wait period will apply on any gold bought. You can reduce this period by completing Aadhaar KYC.",
      },
      {
        question: "Can I dispute a PAN that already exists in the system?",
        answer: "Yes, if your PAN already exists in our system, you can dispute it by providing a PAN upload and completing Aadhaar KYC. Once verified, your PAN will be transferred to your profile, and any gold leased on the previous profile will also be shifted.",
      },
    ],
    Redeem: [
      {
        question: "What does it mean to redeem my earnings in Pixalive Gold Network?",
        answer: "Redeeming your earnings in Pixalive Gold Network means using the credits or funds you’ve accumulated on the platform to claim a product or service. These earnings can be redeemed for gold, exclusive services, lifestyle products, or even items from the Pixalive Shopping Network.",
      },
      {
        question: "How can I redeem my earnings on Pixalive Gold Network?",
        answer: "To redeem your earnings, simply log in to your Pixalive Gold Network account and navigate to the Redeem section. You’ll be able to browse through available products and services that can be redeemed with your earnings. After selecting what you wish to redeem, follow the instructions to complete the redemption.",
      },
      {
        question: "What products and services can I redeem my earnings for?",
        answer: "You can redeem your earnings for a variety of items within the Pixalive Gold Network, including:\n\nGold Coins & Jewelry: Purchase assay-certified gold coins or jewelry from Pixalive Jewellery Network.\nProducts from Pixalive Shopping Network: Redeem your earnings for lifestyle products, gadgets, and more.\nExclusive Services: Access special services, such as premium network memberships or personalized concierge services.",
      },
      {
        question: "Can I redeem my earnings as cash?",
        answer: "Currently, earnings in the Pixalive Gold Network cannot be redeemed as cash. Instead, they are exclusively redeemable for products, services, or credits within the network.",
      },
      {
        question: "What is the minimum amount required to redeem my earnings?",
        answer: "The minimum amount required to redeem your earnings depends on the specific product or service you are interested in. For example, gold products may have a higher minimum redemption value than lifestyle items.",
      },
      {
        question: "How do I know if I have enough earnings to redeem for a product or service?",
        answer: "Your available balance for redemption will be clearly shown in your Pixalive Gold Network account. Before making a selection, ensure that your available balance covers the cost of the item or service you want to redeem.",
      },
      {
        question: "Can I combine my earnings with cash to redeem a product?",
        answer: "Yes, you can combine your earnings with cash or other payment methods to redeem products or services. If your earnings are insufficient to cover the full cost, you’ll be prompted to pay the balance using an accepted payment method.",
      },
      {
        question: "How long does it take to redeem my earnings and receive the product or service?",
        answer: "The redemption process is usually quick. For physical products like gold coins or jewelry, delivery can take between 3-7 working days, depending on the location. For digital services or non-tangible products, the redemption process may be instant.",
      },
      {
        question: "Are there any charges associated with redeeming my earnings?",
        answer: "Certain products, such as gold coins and high-value items, may require additional charges for minting, packaging, insurance, or delivery. These charges will be clearly communicated to you before you confirm the redemption.",
      },
      {
        question: "Can I return or exchange items redeemed through Pixalive Gold Network?",
        answer: "The return or exchange policy will vary depending on the product or service. For gold products, returns may not be possible due to the nature of the item. However, for other products or services, returns may be subject to specific terms outlined at the time of redemption.",
      },
      {
        question: "Can I redeem my earnings for someone else?",
        answer: "Yes, you can redeem your earnings for someone else as a gift. During the redemption process, you will be able to specify the recipient's details and arrange for the product or service to be delivered to their address.",
      },
      {
        question: "What happens if I don't have enough earnings for my desired redemption?",
        answer: "If your earnings are insufficient for a specific product or service, you can either choose a lower-value redemption option or combine your earnings with another payment method, such as credit or debit cards.",
      },
      {
        question: "How can I track my redeemed product or service?",
        answer: "After completing the redemption, you will receive a confirmation email or SMS with details about the product or service. For physical products, you will also receive a tracking number to monitor the delivery progress.",
      },
      {
        question: "Is there a time limit on using my redeemed products or services?",
        answer: "Products like gold coins and jewelry are immediately available for delivery after redemption. For services, there may be specific activation or usage windows, which will be clearly mentioned during the redemption process.",
      },
    ],
    Lease: [
      {
        question: "What is Gold Leasing?",
        answer: "Gold leasing is a method where you lease your digital gold to Pixalive-certified jewellers who will use the gold for their manufacturing processes. At the end of the lease term, the jeweller returns the gold along with the lease rental payment. The gold leased out is measured in grams.",
      },
      {
        question: "How does it work? What are the steps involved?",
        answer: "Pixalive facilitates the lease of your gold to jewellers who are part of the Pixalive Jewellery Network. Once a jeweller has been verified and has provided the necessary security for the lease, your gold is allocated to them. At the end of the lease, Pixalive ensures the return of the gold along with the yield, making it accessible to you again.\n\nSteps:\n1. Choose a jeweller from the Pixalive Jewellery Network list.\n2. Purchase gold worth 0.5 gm or more for leasing (you can also use your Pixalive balance).\n3. Complete your PAN verification.\n4. Confirm the lease, including jeweller details, tenure, and amount of gold.",
      },
      {
        question: "How do I participate in a gold lease?",
        answer: "To lease your gold, you must have a Pixalive account and follow the standard steps: select a jeweller, purchase gold (or use existing balance), complete PAN verification, and confirm the lease.",
      },
      {
        question: "How and when will I earn a yield on my gold?",
        answer: "Once your gold is leased, you'll earn a yield credited monthly in gold grams to your Pixalive account. At the end of the lease, you receive both the principal and any remaining yield.",
      },
      {
        question: "Who is Pixalive? What role does Pixalive play in the lease?",
        answer: "Pixalive is the platform that connects users with certified jewellers, manages lease logistics, ensures security is provided, and facilitates the return of gold and yield.",
      },
      {
        question: "Is the yield paid out in rupees or grams of gold?",
        answer: "The yield is paid out in grams of gold. You can choose to sell it at market rate and withdraw the equivalent rupee amount.",
      },
      {
        question: "Who am I leasing out the gold to? Why do they lease my gold?",
        answer: "You lease your gold to certified jewellers in the Pixalive Jewellery Network. They lease gold to meet manufacturing needs while managing price volatility without taking loans.",
      },
      {
        question: "How do I choose between the jewellers within the Pixalive Jewellery Network?",
        answer: "Choose a jeweller based on yield rate and lease tenure, both displayed on the listing page.",
      },
      {
        question: "How is the yield rate decided?",
        answer: "The jeweller sets the yield rate. Pixalive may also offer bonuses or incentives, especially for repeat customers.",
      },
      {
        question: "When is the lease process complete?",
        answer: "The lease is complete at the end of the agreed tenure or earlier if the jeweller closes the lease. The gold and yield are then credited to your account.",
      },
      {
        question: "Can I invest in more than one lease?",
        answer: "Yes, you can participate in multiple leases with no upper limit.",
      },
      {
        question: "Can I sell my gold while it is leased out?",
        answer: "No, leased gold is physically allocated to the jeweller, and cannot be sold until the lease ends.",
      },
      {
        question: "How do I exit a lease?",
        answer: "You can exit the lease only at the end of the lease period, or earlier if the jeweller settles it beforehand.",
      },
      {
        question: "What happens if the price of gold falls or if there’s a default? Will you guarantee my returns?",
        answer: "Pixalive does not guarantee returns. However, it ensures that jewellers provide collateral, which can be enforced in case of a default.",
      },
      {
        question: "How is my gold protected during the lease?",
        answer: "Pixalive vets all jewellers and requires them to provide security for leases. This collateral is enforced in case of default.",
      },
      {
        question: "Can I have a nominee? What happens in the event of my death?",
        answer: "Pixalive currently does not offer a nomination facility. In case of death, heirs can contact customer support with valid documents.",
      },
      {
        question: "What are the risks and how are they mitigated?",
        answer: "The main risk is jeweller default. Pixalive mitigates this by requiring security from jewellers and enforcing it if needed.",
      },
      {
        question: "Is gold leasing regulated?",
        answer: "Gold leasing is not regulated by financial authorities like SEBI or RBI. Pixalive operates this product legally through its own platform.",
      },
      {
        question: "What about taxation on the yield?",
        answer: "Yield from gold leasing is treated as capital gains and taxed accordingly. A 10% TDS will be deducted and a TDS certificate will be issued for tax filing.",
      },
    ],
    SIP: [
      {
        question: "What is a Gold Savings Plan?",
        answer: "A Gold Savings Plan is a systematic savings tool that allows customers to accumulate gold by selecting a fixed instalment amount to be paid weekly or monthly for a chosen duration. The accumulated gold can later be exchanged for jewellery or other services through Pixalive Gold Network.",
      },
      {
        question: "Can you choose multiple Gold Savings Plans?",
        answer: "Yes, you can opt for more than one Gold Savings Plan by setting up separate SIP details for each plan.",
      },
      {
        question: "Can you cancel a Gold Savings Plan?",
        answer: "Yes, you can cancel your Gold Savings Plan at any time. Future instalments will no longer be charged once cancelled.",
      },
      {
        question: "Can you make changes to an existing Gold Savings Plan?",
        answer: "Yes, you can increase the instalment amount or the duration of the plan. However, decreasing the amount or changing the frequency (weekly/monthly) is not allowed.",
      },
      {
        question: "What is the minimum amount for an instalment in the Gold Savings Plan?",
        answer: "The minimum instalment amount is ₹100 or higher.",
      },
      {
        question: "Which payment methods are accepted for the Gold Savings Plan?",
        answer: "Payments are accepted via an e-mandate set up through the list of accepted banks.",
      },
      {
        question: "How do I know when the e-mandate has been verified?",
        answer: "It usually takes up to 5 working days. Once verified, you'll receive an SMS confirming activation of your plan.",
      },
      {
        question: "What happens if there are insufficient funds in my bank account when my SIP payment is due?",
        answer: "Pixalive will retry the payment twice. After three failed attempts, the instalment will be skipped. Pixalive does not charge for failed payments, but your bank may apply bounce charges.",
      },
    ],
    Delivery: [
      {
        question: "How is the gold delivered to me?",
        answer: "You can request delivery of gold starting from 0.5 gm in available coin denominations. Making and delivery charges apply. Once payment is confirmed, your gold is dispatched via trusted logistics, with tracking details shared to your registered mobile number.",
      },
      {
        question: "Is it possible to store my withdrawn gold coins in safe custody and have them delivered later?",
        answer: "No, once a delivery request is placed, the gold is dispatched and must be accepted at the time of delivery.",
      },
      {
        question: "Can I change my delivery address?",
        answer: "Yes, delivery can be made to a different address, but it may require address verification as per Pixalive’s norms.",
      },
      {
        question: "Where is gold delivery available?",
        answer: "Gold delivery is available across India via verified logistics partners. You will be informed if your pin code is serviceable.",
      },
      {
        question: "Are there any charges for gold delivery?",
        answer: "Yes, minting charges apply. These include costs for minting, packaging, insurance, assay certification, and secure delivery.",
      },
      {
        question: "How does Pixalive Gold Network ensure secure delivery of gold?",
        answer: "All deliveries are fully insured and handled by trusted logistics partners. Coins and bars are assay-certified, packaged securely, and tested for purity with zero negative weight tolerance.",
      },
    ],
  };

    const FAQ = () => {
      const [activeTab, setActiveTab] = useState("General");
      const [openIndex, setOpenIndex] = useState(null);

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      const filteredFaqData = faqData[activeTab] || [];

      return (
        <div className="bg-[#140113] text-[#B98A30] p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Pixalive Gold Network – Frequently Asked Questions
          </h2>
      
          {/* Centered Container */}
          <div className="max-w-3xl mx-auto">
      
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-6 py-2 rounded-md border text-sm font-medium transition-all duration-200 ${
                    activeTab === cat
                      ? "bg-[#B98A30] text-[#140113]"
                      : "border-[#ffffff] text-white   hover:bg-[#B98A30]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
      
            {/* Accordions */}
            <div>
              {filteredFaqData.map((faq, index) => (
                <div key={index} className="mb-4 border border-[#ffffff]/50 rounded-md">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`flex items-center justify-between w-full p-4 font-medium text-left rounded-md transition-all duration-200 ${
                      openIndex === index ? "bg-[#B98A30]/10" : "hover:bg-[#B98A30]/5"
                    }`}
                    aria-expanded={openIndex === index}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-[#140113]/80 rounded-b-md">
                      <p className="text-sm text-white">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              {filteredFaqData.length === 0 && (
                <p className="text-center ">No FAQs available for the selected category.</p>
              )}
            </div>
          </div>
        </div>
      );
      
    };

  export default FAQ;