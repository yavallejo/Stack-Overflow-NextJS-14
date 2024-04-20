import { HotNetwork, SidebarLink, PopularTags } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_totalQuestion: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_totalQuestion: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const hotNetwork: HotNetwork[] = [
  {
    id: "1",
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    link: "#",
  },
  {
    id: "2",
    title: "How can an airconditioning machine exist?",
    link: "#",
  },
  {
    id: "3",
    title: "Interrogated every time crossing UK Border as citizen",
    link: "#",
  },
  {
    id: "4",
    title: "Low digit addition generator",
    link: "#",
  },
  {
    id: "5",
    title: "What is an example of 3 numbers that do not make up a vector?",
    link: "#",
  },
];

export const popularTags: PopularTags[] = [
  {
    id: 1,
    title: "Javascript",
    totalQuestion: 20152,
    showCount: true,
  },
  {
    id: 2,
    title: "NextJs",
    totalQuestion: 18493,
    showCount: true,
  },
  {
    id: 3,
    title: "ReactJs",
    totalQuestion: 16269,
    showCount: true,
  },
  {
    id: 4,
    title: "NodeJS",
    totalQuestion: 15121,
    showCount: true,
  },
  {
    id: 5,
    title: "Python",
    totalQuestion: 14431,
    showCount: false,
  },
];
