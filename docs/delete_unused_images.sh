#!/bin/bash

# Define the directory containing images
IMAGE_DIR="assets/img"

# Define the directory containing your site's source files
SOURCE_DIR="_site"

# Build the site to update the _site directory
#jekyll build

# Find all image files in the IMAGE_DIR
find "$IMAGE_DIR" -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.gif \) | while read -r image; do
  # Extract the relative path of the image
  relative_image_path=${image#$IMAGE_DIR/}
  
  # Search for the usage of each image file in the SOURCE_DIR
  if ! grep -qR --include=\*.{html,md} "$relative_image_path" "$SOURCE_DIR"; then
    echo "Deleting unused image: $image"
    rm "$image"
  fi
done

echo "Unused images have been deleted."
