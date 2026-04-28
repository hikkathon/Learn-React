export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export type ProfileProps = {
  name: string;
  profession: string;
  awards: string[];
  discovered: string;
  avatarId: string;
};

export const profileData: ProfileProps[] = [
  {
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (chemical element)",
    avatarId: "szV5sdG",
  },
  {
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
    avatarId: "YfeOqp2",
  },
];
