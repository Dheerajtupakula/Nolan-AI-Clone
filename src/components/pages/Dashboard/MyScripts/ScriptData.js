export const Scripts = [
  {
    script_id: "1",
    script_title: "Untitled Video Short",
    last_script_seen: " ABOUT 2 HOURS AGO",
    script_genre: ["Adventure", "Detective"],
    script_synopsis: " plot",
    script_data: ["hello", "world"],
  },
  {
    script_id: "2",
    script_title: "Untitled Video Short",
    last_script_seen: " ABOUT 2 HOURS AGO",
    script_genre: ["Adventure", "Detective"],
    script_synopsis: " plot",
    script_data: ["dheeraj"],
  },
  {
    script_id: "3",
    script_title: "Untitled Video Short",
    last_script_seen: " ABOUT 2 HOURS AGO",
    script_genre: ["Adventure", "Detective"],
    script_synopsis: " plot",
    script_data: ["hello", "world"],
  },
  {
    script_id: "4",
    script_title: "Untitled Video Short",
    last_script_seen: " ABOUT 2 HOURS AGO",
    script_genre: ["Adventure", "Detective"],
    script_synopsis: " plot",
    script_data: ["hello", "world"],
  },
];

export const handleFormData = (formData) => {
  const formattedData = {
    script_id: String(Scripts.length + 1),
    script_title: formData.flimTitle || "Untitled",
    last_script_seen: "ABOUT 2 HOURS AGO",
    script_genre: formData.flimGenre || [],
    script_synopsis: formData.flimTitleDec || "",
    script_data: [],
  };

  Scripts.push(formattedData);
  console.log("Formatted data:", formattedData);
  console.log("Data array:", Scripts);
};
