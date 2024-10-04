import ServiceHome from "./ServiceHome.jsx";
import LearnMore from "./LearnMore.jsx";
import { Routes, Route } from "react-router-dom";

const cardData = [
  {
    id: "Carbon_Footprint_Calculator",
    image: new URL("../assets/service/carfoot.jpeg", import.meta.url).href,
    heading: "Carbon Footprint Calculator",
    description:
      "Estimates and tracks emissions, offers reduction tips, integrates with wearables.",

    mainDesc: `A carbon footprint calculator is a tool designed to estimate and track the amount of carbon dioxide (CO₂) and other greenhouse gases emitted as a result of human activities. The goal is to help individuals and organizations understand their environmental impact and identify ways to reduce it.Estimates and Tracks Emissions
    Estimates Emissions: The calculator assesses the emissions produced from various activities. This involves inputting data about:
    `,
    dHeading1: "Energy Consumption",
    dHeading2: "Waste Management",
    dHeading3: "View Historical Data",
    dHeading4: "Energy Efficiency:",
    dHeading5: "Transportation",
    dDetails1: `Usage of electricity, gas, and other fuels.Types of vehicles used, distance traveled, fuel consumption.Amount of waste produced, recycling habits.Diet (meat, vegetarian, vegan), purchasing habits, etc. The tool continuously monitors and records emissions over time.`,
    dDetails2: `Recycling more, composting organic waste, reducing overall waste production.
    Integrates with Wearables
    Integration with wearables adds a layer of convenience and accuracy in tracking personal activities that contribute to carbon emissions.`,
    dDetails3: `Access past data to see trends and patterns. Establish emission reduction targets and track progress toward these goals.`,
    dDetails4: `Switching to energy-efficient appliances, using LED lighting, improving home insulation.`,
    dDetails5: `Carpooling, using public transportation, cycling, walking, driving fuel-efficient vehicles. Reducing meat consumption, supporting local produce, minimizing single-use plastics.`,
    OtherDetailHeading: "How to Use it ??...",
    OtherDetailsDesc: [
      {
        headLine: "Initial Setup",
        descs: `Enter basic information: location, household size, types of vehicles, dietary preferences, etc.
        Sync with wearable devices if available.`,
      },
      {
        headLine: "Daily Use",
        descs: `Daily commute, shopping, energy usage, etc.Wearables automatically track physical activities and sync data to the calculator`,
      },
      {
        headLine: "Review Data",
        descs: `Analyze weekly or monthly reports on emissions.
        Compare data against previous periods to see improvement or areas needing attention.`,
      },
      {
        headLine: "Follow Tips:",
        descs: `Implement suggested changes based on the calculator’s recommendations.
        Adjust goals and activities accordingly.`,
      },
      {
        headLine: "Track Progress",
        descs: `Use the calculator to set and review progress towards emission reduction targets.
        Celebrate milestones and achievements in reducing carbon footprint`,
      },
      {
        headLine: "Benefits",
        descs: `Increases user awareness of their carbon emissions and environmental impact.
        Actionable Insights: Provides practical and personalized advice to reduce emissions.Encourages ongoing commitment to sustainability through goal setting and progress tracking. Promotes activities like walking and cycling, which can also improve personal health`,
      },
    ],
  },
  {
    id: "Sustainability_Hub",
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url).href,
    heading: "Sustainability Hub",
    description: "Articles, videos, infographics, expert opinions, and blog on sustainability.",
  
    mainDesc: `The Sustainability Hub is a comprehensive resource platform providing valuable content to promote sustainable living. It features articles, videos, infographics, expert opinions, and blog posts that cover a wide range of topics related to sustainability and environmental consciousness.`,
    
    dHeading1: "Informative Articles",
    dHeading2: "Engaging Videos",
    dHeading3: "Detailed Infographics",
    dHeading4: "Expert Opinions",
    dHeading5: "Interactive Blog",
  
    dDetails1: `In-depth articles on various sustainability topics such as renewable energy, waste management, and conservation efforts. Regular updates keep you informed about the latest trends and practices in sustainability.`,
    
    dDetails2: `Engaging and educational videos that illustrate sustainable practices, eco-friendly tips, and success stories from around the world. Visual content makes complex concepts easy to understand and implement.`,
    
    dDetails3: `Infographics that provide clear and concise information on sustainability issues, statistics, and solutions. Easy to share and great for quick learning.`,
    
    dDetails4: `Opinions and insights from sustainability experts, industry leaders, and environmental activists. Learn from the experiences and knowledge of those at the forefront of the sustainability movement.`,
    
    dDetails5: `An interactive blog that allows users to share their own experiences, ask questions, and engage with a community of like-minded individuals committed to sustainability. Regular contributions from guest bloggers and thought leaders.`,
  
    OtherDetailHeading: "How to Use the Hub",
    
    OtherDetailsDesc: [
      {
        headLine: "Explore Content",
        descs: `Browse through various categories of articles, videos, and infographics. Use the search feature to find specific topics of interest.`
      },
      {
        headLine: "Stay Updated",
        descs: `Subscribe to newsletters and notifications to receive the latest content and updates. Follow the blog for regular posts and discussions.`
      },
      {
        headLine: "Engage with Experts",
        descs: `Participate in webinars, Q&A sessions, and forums hosted by sustainability experts. Gain deeper insights and practical advice.`
      },
      {
        headLine: "Share and Collaborate",
        descs: `Share your favorite content on social media and collaborate with others in the sustainability community. Contribute to the blog by sharing your own experiences and tips.`
      },
      {
        headLine: "Implement Tips",
        descs: `Apply the tips and best practices shared in the content to your daily life. Track your progress and make continuous improvements toward a sustainable lifestyle.`
      },
      {
        headLine: "Benefits",
        descs: `Increased knowledge and awareness about sustainability. Practical advice and tips for living a more eco-friendly life. Access to a community of sustainability enthusiasts and experts. Continuous learning and engagement opportunities.`
      }
    ]
  },
  {
    id: "Eco_Challenges",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description: "Interactive challenges with rewards and social media sharing.",
  
    mainDesc: `Eco-Challenges are interactive activities designed to encourage sustainable practices through fun and engaging tasks. Participants can complete challenges, earn rewards, and share their achievements on social media, fostering a community of environmentally conscious individuals.`,
  
    dHeading1: "Variety of Challenges",
    dHeading2: "Reward System",
    dHeading3: "Social Media Integration",
    dHeading4: "Community Engagement",
    dHeading5: "Educational Content",
  
    dDetails1: `A wide range of challenges covering various aspects of sustainability, such as reducing plastic use, conserving water, and promoting recycling. Challenges are designed for different levels of difficulty and can be completed individually or in groups.`,
  
    dDetails2: `Earn points, badges, and rewards for completing challenges. Rewards can include discounts on eco-friendly products, digital badges, and recognition within the community. The reward system adds motivation and a sense of accomplishment.`,
  
    dDetails3: `Seamless integration with social media platforms to share progress, achievements, and completed challenges. Encourage friends and family to join the challenge and create a positive impact together.`,
  
    dDetails4: `Engage with a community of like-minded individuals who are also participating in eco-challenges. Share tips, experiences, and support each other in achieving sustainability goals. Join community events and group challenges for a collective impact.`,
  
    dDetails5: `Each challenge includes educational content to help participants understand the importance of the activity and how it contributes to sustainability. Learn about the environmental impact of everyday actions and discover new ways to live sustainably.`,
  
    OtherDetailHeading: "How to Participate",
    
    OtherDetailsDesc: [
      {
        headLine: "Sign Up",
        descs: `Create an account on the Eco-Challenges platform. Fill in your profile details and select the types of challenges you’re interested in.`
      },
      {
        headLine: "Choose a Challenge",
        descs: `Browse through the list of available challenges. Select a challenge that interests you and start participating.`
      },
      {
        headLine: "Complete Tasks",
        descs: `Follow the instructions for each challenge task. Complete the tasks within the given timeframe and earn points and rewards.`
      },
      {
        headLine: "Share Achievements",
        descs: `Use the social media integration to share your progress and achievements. Inspire others to join and participate in eco-challenges.`
      },
      {
        headLine: "Track Progress",
        descs: `Monitor your progress through the platform’s dashboard. View completed challenges, earned rewards, and set new goals for yourself.`
      },
      {
        headLine: "Benefits",
        descs: `Promotes sustainable practices through fun and engaging activities. Provides a sense of community and collective action towards environmental goals. Offers rewards and recognition to motivate continued participation. Educates participants on the importance of sustainability and how to make a positive impact.`
      }
    ]
  },  
  {
    id: "Sustainable_Living_Guide",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url).href,
    heading: "Sustainable Living Guide",
    description: "Tips, goal tracking, and app integration for sustainable habits.",
  
    mainDesc: `The Sustainable Living Guide provides practical tips, goal tracking, and app integration to help individuals adopt and maintain sustainable habits. This guide is a comprehensive resource for anyone looking to make positive changes for the environment.`,
  
    dHeading1: "Practical Tips",
    dHeading2: "Goal Tracking",
    dHeading3: "App Integration",
    dHeading4: "Personalized Recommendations",
    dHeading5: "Progress Reports",
  
    dDetails1: `Offers actionable tips on various aspects of sustainable living, including energy conservation, waste reduction, sustainable shopping, and more. Tips are easy to follow and implement in daily life.`,
  
    dDetails2: `Allows users to set and track sustainability goals. Whether it's reducing energy consumption, minimizing waste, or increasing the use of renewable resources, the guide helps monitor progress and stay motivated.`,
  
    dDetails3: `Integrates with popular apps to provide a seamless experience. Sync data from fitness trackers, smart home devices, and other apps to get a comprehensive view of your sustainability efforts.`,
  
    dDetails4: `Provides personalized recommendations based on user preferences and habits. The guide adapts to individual needs and offers tailored advice to maximize sustainability impact.`,
  
    dDetails5: `Generates detailed progress reports to help users see the impact of their efforts. Reports include statistics, achievements, and areas for improvement, making it easy to stay on track.`,
  
    OtherDetailHeading: "How to Get Started",
    
    OtherDetailsDesc: [
      {
        headLine: "Download the Guide",
        descs: `Access the Sustainable Living Guide online or download the app. Create a profile to start receiving personalized tips and recommendations.`
      },
      {
        headLine: "Set Goals",
        descs: `Define your sustainability goals within the guide. Choose from predefined goals or create custom ones that align with your lifestyle.`
      },
      {
        headLine: "Integrate Apps",
        descs: `Connect the guide to your favorite apps and devices. Sync data to get real-time updates on your sustainability efforts.`
      },
      {
        headLine: "Follow Tips",
        descs: `Implement the practical tips provided by the guide. Make small, sustainable changes in your daily routine to achieve your goals.`
      },
      {
        headLine: "Track Progress",
        descs: `Use the goal tracking and progress reports to monitor your achievements. Adjust your efforts based on the insights provided by the guide.`
      },
      {
        headLine: "Benefits",
        descs: `Provides a structured approach to sustainable living. Helps maintain motivation through goal tracking and progress reports. Offers personalized advice tailored to individual habits. Encourages the adoption of sustainable practices through easy-to-follow tips.`
      }
    ]
  },  
  {
    id: "Community_Forum",
    image: new URL("../assets/service/communityform.jpg", import.meta.url).href,
    heading: "Community Forum",
    description: "Discussion board, expert Q&As, webinars, and group management.",
  
    mainDesc: `The Community Forum is a vibrant online platform that facilitates discussions, expert Q&A sessions, webinars, and group management. It is designed to foster a collaborative environment where users can engage, learn, and share knowledge about sustainability and other relevant topics.`,
  
    dHeading1: "Discussion Board",
    dHeading2: "Expert Q&As",
    dHeading3: "Webinars",
    dHeading4: "Group Management",
    dHeading5: "Resource Sharing",
  
    dDetails1: `An open discussion board where users can start conversations, ask questions, and share experiences on various topics. It’s a space for exchanging ideas, seeking advice, and building a supportive community.`,
  
    dDetails2: `Regular Q&A sessions with experts in sustainability, environmental science, and related fields. Users can submit questions and receive informed answers from industry professionals, enhancing their understanding of complex topics.`,
  
    dDetails3: `Interactive webinars hosted by experts, providing in-depth insights into specific subjects. These live sessions offer opportunities for real-time interaction, learning, and networking with other participants.`,
  
    dDetails4: `Tools for managing and organizing groups within the forum. Whether it’s a local sustainability club or an online interest group, the platform supports collaboration, event planning, and communication among group members.`,
  
    dDetails5: `A dedicated space for sharing valuable resources such as articles, research papers, videos, and infographics. Users can contribute and access a wide range of materials to support their learning and initiatives.`,
  
    OtherDetailHeading: "How to Participate",
    
    OtherDetailsDesc: [
      {
        headLine: "Join the Forum",
        descs: `Sign up for an account to become a member of the Community Forum. Fill out your profile to start participating in discussions and activities.`
      },
      {
        headLine: "Engage in Discussions",
        descs: `Browse existing topics or start new threads on the discussion board. Engage with other members by commenting, liking, and sharing posts.`
      },
      {
        headLine: "Attend Webinars",
        descs: `Register for upcoming webinars to learn from experts. Participate in live Q&A sessions and engage with other attendees.`
      },
      {
        headLine: "Ask the Experts",
        descs: `Submit your questions to scheduled Q&A sessions. Get answers and advice from professionals in various fields of expertise.`
      },
      {
        headLine: "Manage Groups",
        descs: `Create or join groups based on your interests. Utilize the group management tools to coordinate activities, plan events, and communicate effectively.`
      },
      {
        headLine: "Share Resources",
        descs: `Contribute to the resource library by sharing useful articles, research, and multimedia. Access a wealth of information shared by other members.`
      },
      {
        headLine: "Benefits",
        descs: `Fosters a collaborative and supportive community environment. Provides access to expert knowledge and real-time learning opportunities. Enhances group coordination and event management. Promotes resource sharing and collective growth.`
      }
    ]
  },  
  
  {
    id: "Business_Sustainability_Toolkit",
    image: new URL("../assets/service/bussiness.jpeg", import.meta.url).href,
    heading: "Business Sustainability Toolkit",
    description: "Resources, case studies, and guides for sustainable business practices.",
  
    mainDesc: "The Business Sustainability Toolkit is a comprehensive collection of resources designed to help businesses implement and enhance sustainable practices. It includes case studies, practical guides, and valuable resources to support companies in their journey towards sustainability.",
  
    dHeading1: "Comprehensive Resources",
    dHeading2: "In-Depth Case Studies",
    dHeading3: "Practical Guides",
    dHeading4: "Implementation Tools",
    dHeading5: "Best Practices",
  
    dDetails1: "Access a wide range of resources including articles, white papers, and research reports on sustainability. These resources provide valuable insights into sustainable business practices and industry trends.",
  
    dDetails2: "Explore detailed case studies of companies that have successfully implemented sustainable practices. Learn from their experiences, challenges, and solutions to apply similar strategies to your own business.",
  
    dDetails3: "Utilize practical guides that offer step-by-step instructions on various aspects of sustainability, such as reducing carbon footprint, implementing recycling programs, and improving energy efficiency.",
  
    dDetails4: "Access tools and templates designed to assist with the implementation of sustainability initiatives. These include checklists, assessment tools, and planning templates to streamline the process.",
  
    dDetails5: "Learn about best practices from leading companies and industry experts. Understand the key factors for successful sustainability initiatives and how to integrate them into your business operations.",
  
    OtherDetailHeading: "How to Use the Toolkit",
    
    OtherDetailsDesc: [
      {
        headLine: "Explore Resources",
        descs: "Browse through the collection of resources to gather knowledge on various sustainability topics. Use the search function to find specific information relevant to your business needs."
      },
      {
        headLine: "Review Case Studies",
        descs: "Study the case studies to understand how other businesses have approached sustainability. Analyze their strategies and results to gain insights for your own practices."
      },
      {
        headLine: "Follow Guides",
        descs: "Implement the recommendations from the practical guides. Follow the step-by-step instructions to integrate sustainable practices into your business operations."
      },
      {
        headLine: "Utilize Tools",
        descs: "Use the provided tools and templates to assist with planning and implementing sustainability initiatives. Customize the templates to fit your business’s specific needs."
      },
      {
        headLine: "Adopt Best Practices",
        descs: "Incorporate the best practices outlined in the toolkit into your business strategy. Monitor progress and adjust practices as needed to achieve sustainability goals."
      },
      {
        headLine: "Benefits",
        descs: "Provides a structured approach to integrating sustainability into business operations. Offers practical guidance and tools to streamline implementation. Enables learning from real-world examples and expert insights. Supports continuous improvement and achievement of sustainability goals."
        }
    ]
  },

  {
    id: "News_and_Updates",
    image: new URL("../assets/service/newsupdate.jpg", import.meta.url).href,
    heading: "News and Updates",
    description: "Latest environmental news, updates, and newsletter subscription.",
  
    mainDesc: "The News and Updates section provides the latest information on environmental issues, sustainability trends, and relevant developments. Stay informed about current events and subscribe to newsletters for regular updates delivered straight to your inbox.",
  
    dHeading1: "Latest Environmental News",
    dHeading2: "Timely Updates",
    dHeading3: "Newsletter Subscription",
    dHeading4: "In-Depth Articles",
    dHeading5: "Expert Insights",
  
    dDetails1: "Access a regularly updated feed of the latest news related to environmental issues, climate change, and sustainability. Stay informed about major events, policy changes, and scientific discoveries impacting the environment.",
  
    dDetails2:" Receive timely updates on recent developments and trends in the sustainability sector. This includes information on new regulations, technological advancements, and noteworthy initiatives from around the world.",
  
    dDetails3:" Subscribe to our newsletter to get curated news and updates delivered directly to your email. Stay up-to-date with a summary of important stories and upcoming events related to environmental sustainability.",
  
    dDetails4: "Read in-depth articles that provide detailed analyses and perspectives on key environmental topics. These articles offer a deeper understanding of complex issues and emerging trends.",
  
    dDetails5: "Gain insights from industry experts and thought leaders through interviews, opinion pieces, and expert commentary. Learn from the experiences and knowledge of those shaping the future of sustainability.",
  
    OtherDetailHeading: "How to Stay Updated",
    
    OtherDetailsDesc: [
      {
        headLine: "Browse News",
        descs: "Visit the News and Updates section regularly to catch up on the latest environmental news and updates. Use filters to find stories of interest."
      },
      {
        headLine: "Subscribe to Newsletter",
        descs: "Sign up for the newsletter by entering your email address. Choose your preferences to receive relevant content and updates."
      },
      {
        headLine: "Read Articles",
        descs: "Explore in-depth articles to gain a comprehensive understanding of environmental issues. Use the article archive to access past publications."
      },
      {
        headLine: "Follow Expert Insights",
        descs: "Read and engage with content from industry experts. Follow their insights to stay informed about best practices and innovative solutions in sustainability."
      },
      {
        headLine: "Engage with Content",
        descs: "Share news and articles on social media to spread awareness. Participate in discussions and provide feedback on topics of interest."
      },
      {
        headLine: "Benefits",
        descs: "Keeps you informed about the latest developments in environmental sustainability. Provides curated updates and expert analysis for a deeper understanding. Offers a convenient way to stay connected with ongoing environmental issues and trends."      }
    ]
  },
  {
    id: "Tree_Plantation",
    image: new URL("../assets/service/tree.jpg", import.meta.url).href,
    heading: "Tree Plantation",
    description: "Tree planting is the process of transplanting tree seedlings to new locations, aimed at restoring and enhancing green spaces.",
  
    mainDesc: "Tree Plantation involves the process of planting and nurturing young trees in designated areas to promote environmental health and sustainability. This initiative aims to enhance green spaces, improve air quality, and contribute to biodiversity.",
  
    dHeading1: "Planting Process",
    dHeading2: "Environmental Benefits",
    dHeading3: "Community Involvement",
    dHeading4: "Maintenance and Care",
    dHeading5: "How to Get Involved",
  
    dDetails1: "The planting process includes selecting appropriate tree species, preparing the soil, planting seedlings, and ensuring proper spacing. Detailed instructions and guidelines are provided to ensure successful establishment of the trees.",
  
    dDetails2: "Trees provide numerous environmental benefits including improving air quality, reducing carbon dioxide levels, conserving water, and supporting wildlife habitats. Understanding these benefits helps in appreciating the importance of tree plantation.",
  
    dDetails3: "Encourages community participation in tree planting events. Local volunteers, schools, and organizations can join initiatives to plant and care for trees, fostering a sense of environmental stewardship and community engagement.",
  
    dDetails4: "Ongoing maintenance is crucial for the health and growth of newly planted trees. This includes watering, mulching, pruning, and monitoring for pests and diseases. Guidelines are provided for maintaining tree health over time.",
  
    dDetails5: "Learn how to get involved in tree planting projects in your area. Whether it’s joining a local tree planting event, supporting tree planting organizations, or starting your own initiative, there are various ways to contribute.",
  
    OtherDetailHeading: "How to Participate",
    
     OtherDetailsDesc: [
      {
        headLine: "Find a Tree Planting Event",
        descs: "Check local listings or organizations for upcoming tree planting events. Join these events to contribute directly to the initiative."
      },
      {
        headLine: "Get Involved Locally",
        descs: "Reach out to local environmental groups or community organizations to participate in or organize tree planting activities."
      },
      {
        headLine: "Adopt a Tree",
        descs: "Consider adopting a tree or small grove to support its growth and maintenance. Engage in activities that contribute to its health and survival."
      },
      {
        headLine: "Educate and Advocate",
        descs: "Educate others about the benefits of tree plantation and advocate for more green spaces in your community. Share information through social media and local events."
      },
      {
        headLine: "Monitor and Maintain",
        descs: "If involved in ongoing projects, assist with the maintenance and monitoring of planted trees to ensure their long-term success."
      },
      {
        headLine: "Benefits",
        descs: "Contributes to environmental conservation and biodiversity. Improves air quality and reduces carbon footprint. Engages and educates the community about sustainability. Enhances local green spaces and provides aesthetic and ecological value."
      }
     ]
  },
  
];

export default function Services() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ServiceHome cardData={cardData} />} />
        <Route
          path="/learn-more/:cardId"
          element={<LearnMore cardData={cardData} />}
        />
      </Routes>
    </>
  );
}
