# 📸 Image Setup Guide

This guide will help you add your profile picture and company logos to your digital resume.

## 🖼️ Adding Your Profile Picture

### Method 1: Simple Profile Picture (Recommended)

1. **Prepare your image**:
   - Use a square image (recommended: 400x400 pixels or larger)
   - Supported formats: JPG, PNG, WebP
   - Keep file size under 500KB for fast loading

2. **Add to public folder**:
   ```bash
   # Copy your image to the public folder
   cp /path/to/your/photo.jpg public/profile-pic.jpg
   ```

3. **Update the data file**:
   Edit `src/data/resumeData.js` and change:
   ```javascript
   profilePicture: "/placeholder-avatar.jpg"
   ```
   to:
   ```javascript
   profilePicture: "/profile-pic.jpg"
   ```

### Method 2: Using Online Image URL

1. **Upload your image** to a service like:
   - [Imgur](https://imgur.com/)
   - [Cloudinary](https://cloudinary.com/)
   - [GitHub](https://github.com/) (in your repository)

2. **Update the data file**:
   ```javascript
   profilePicture: "https://your-image-url.com/photo.jpg"
   ```

## 🏢 Adding Company Logos

### Step 1: Create Company Logos Folder
```bash
mkdir public/company-logos
```

### Step 2: Add Company Logo Images
```bash
# Add your company logos
cp /path/to/company1-logo.png public/company-logos/techcorp.png
cp /path/to/company2-logo.png public/company-logos/startupxyz.png
cp /path/to/company3-logo.png public/company-logos/digitalsolutions.png
```

### Step 3: Update Experience Data
The company logos are already configured in `src/data/resumeData.js`:
```javascript
experience: [
  {
    company: "TechCorp Inc.",
    logo: "/company-logos/techcorp.png", // Update this path
    // ... other details
  }
]
```

## 🎨 Image Optimization Tips

### For Profile Pictures:
- **Size**: 400x400 pixels minimum
- **Format**: JPG for photos, PNG for graphics with transparency
- **File size**: Keep under 500KB
- **Style**: Professional headshot with good lighting
- **Background**: Clean, neutral background

### For Company Logos:
- **Size**: 200x200 pixels minimum
- **Format**: PNG with transparent background (preferred)
- **File size**: Keep under 200KB
- **Style**: Official company logo with good contrast

## 🔧 Troubleshooting

### Image Not Showing?
1. **Check file path**: Make sure the path in `resumeData.js` matches your file location
2. **Check file name**: Ensure exact case matching (e.g., `Profile.jpg` vs `profile.jpg`)
3. **Check file format**: Use supported formats (JPG, PNG, WebP)

### Image Too Large/Small?
1. **Resize your image** before adding to the project
2. **Use online tools** like [TinyPNG](https://tinypng.com/) for compression
3. **Check browser console** for any errors

### Fallback Behavior
- If no image is provided, initials will be displayed
- If image fails to load, initials will be shown as fallback
- Company logos will show company initials if image is missing

## 📁 Recommended File Structure

```
public/
├── profile-pic.jpg          # Your profile picture
├── company-logos/           # Company logos folder
│   ├── techcorp.png
│   ├── startupxyz.png
│   └── digitalsolutions.png
├── index.html
└── ... (other files)
```

## 🚀 Deployment Considerations

### For GitHub Pages:
- All images in `public/` folder will be available
- Use relative paths starting with `/`

### For Vercel/Netlify:
- Images work the same way as local development
- Optimize images for faster loading

### For Custom Domain:
- Update image paths if needed
- Consider using CDN for better performance

## 💡 Pro Tips

1. **Use WebP format** for better compression and faster loading
2. **Optimize images** before adding to reduce bundle size
3. **Test on different devices** to ensure images look good
4. **Keep backups** of your original high-resolution images
5. **Use descriptive file names** for easier management

## 🎯 Example Configuration

Here's how your `resumeData.js` should look with images:

```javascript
export const resumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    // ... other info
    profilePicture: "/profile-pic.jpg" // Your actual image
  },
  
  experience: [
    {
      company: "Your Company",
      logo: "/company-logos/your-company.png", // Your company logo
      // ... other details
    }
  ]
  // ... rest of the data
};
```

---

**Happy customizing! 🎉** 