import fs from "fs";
import path from "path";

// Define the folder containing the photos
const directoryPath = path.join("frontend/src/assets/MembersPhoto");

// Define the output file path
const outputFile = path.join(directoryPath, "index.js");

// Read the directory and process image files
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading the directory:", err);
    return;
  }

  // Filter for image files with supported extensions
  const imageFiles = files.filter((file) =>
    /\.(jpeg|jpg|png|gif|webp)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log("No image files found in the directory.");
    return;
  }

  // Generate export statements for each image file
  const exportStatements = imageFiles
    .map((file) => {
      // Create a sanitized variable name (remove special characters, replace with underscores)
      const variableName = path
        .basename(file, path.extname(file))
        .replace(/[^a-zA-Z0-9]/g, "_");
      return `export { default as ${variableName} } from './${file}';`;
    })
    .join("\n");

  // Write the export statements to index.js
  fs.writeFile(outputFile, exportStatements, (err) => {
    if (err) {
      console.error("Error writing to index.js:", err);
    } else {
      console.log(
        `index.js generated successfully with ${imageFiles.length} exports!`
      );
    }
  });
});
