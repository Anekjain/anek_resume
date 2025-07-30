# 🏆 Certification Logos Setup Guide

This guide will help you add logos for your certifications to make your digital resume more visually appealing.

## 📁 Folder Structure

The certification logos folder has been created at:
```
public/certification-logos/
```

## 🖼️ Adding Certification Logos

### Step 1: Prepare Your Logo Images

**Recommended Specifications:**
- **Size**: 200x200 pixels minimum (square format preferred)
- **Format**: PNG with transparent background (recommended)
- **File size**: Keep under 100KB for fast loading
- **Style**: Official certification authority logos

### Step 2: Add Logo Files

Place your certification logo images in the `public/certification-logos/` folder:

```bash
# Example: Adding certification logos
cp /path/to/aws-logo.png public/certification-logos/aws.png
cp /path/to/google-cloud-logo.png public/certification-logos/google-cloud.png
cp /path/to/scrum-alliance-logo.png public/certification-logos/scrum-alliance.png
```

### Step 3: Update Resume Data

The certification data in `src/data/resumeData.js` is already configured with logo paths:

```javascript
certifications: [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    authority: "Amazon Web Services",
    year: "2023",
    logo: "/certification-logos/aws.png"  // Update this path
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    authority: "Google Cloud",
    year: "2022",
    logo: "/certification-logos/google-cloud.png"  // Update this path
  },
  {
    id: 3,
    title: "Certified Scrum Master (CSM)",
    authority: "Scrum Alliance",
    year: "2021",
    logo: "/certification-logos/scrum-alliance.png"  // Update this path
  }
]
```

## 🎨 Logo Requirements

### For Certification Logos:
- **Official logos** from certification authorities
- **High quality** and clear visibility
- **Transparent background** (PNG format preferred)
- **Consistent sizing** across all logos
- **Professional appearance**

### Recommended Sources:
- **Official certification websites**
- **Brand guidelines** from certification authorities
- **High-resolution downloads** from official sources

## 🔧 Troubleshooting

### Logo Not Showing?
1. **Check file path**: Ensure the path in `resumeData.js` matches your file location
2. **Check file name**: Verify exact case matching (e.g., `AWS.png` vs `aws.png`)
3. **Check file format**: Use supported formats (PNG, JPG, WebP)

### Logo Too Large/Small?
1. **Resize your logo** before adding to the project
2. **Use consistent dimensions** across all certification logos
3. **Check browser console** for any errors

### Fallback Behavior
- If no logo is provided, an award icon will be displayed
- If logo fails to load, it falls back to the award icon
- Console logs will show loading status for debugging

## 📁 Recommended File Structure

```
public/
├── certification-logos/     # Certification logos folder
│   ├── aws.png
│   ├── google-cloud.png
│   ├── scrum-alliance.png
│   └── ... (other certification logos)
├── company-logos/           # Company logos folder
├── profile-pic.jpg          # Your profile picture
└── ... (other files)
```

## 🚀 Deployment Considerations

### For GitHub Pages:
- All images in `public/` folder will be available
- Use relative paths starting with `/`

### For Vercel/Netlify:
- Images work the same way as local development
- Optimize images for faster loading

## 💡 Pro Tips

1. **Use official logos** from certification authorities
2. **Maintain consistent sizing** across all logos
3. **Optimize images** before adding to reduce bundle size
4. **Test on different devices** to ensure logos look good
5. **Keep backups** of your original high-resolution logos

## 🎯 Example Configuration

Here's how your certification data should look with logos:

```javascript
certifications: [
  {
    id: 1,
    title: "Your Certification Title",
    authority: "Certification Authority",
    year: "2023",
    logo: "/certification-logos/your-certification-logo.png"
  }
]
```

## 🔍 Popular Certification Logos

### Cloud & Technology:
- **AWS**: Amazon Web Services logo
- **Google Cloud**: Google Cloud Platform logo
- **Microsoft Azure**: Azure logo
- **Oracle**: Oracle Cloud logo

### Project Management:
- **Scrum Alliance**: CSM, CSPO logos
- **PMI**: PMP, CAPM logos
- **PRINCE2**: PRINCE2 Foundation/Practitioner logos

### Development:
- **Microsoft**: MCP, MCSA, MCSE logos
- **Cisco**: CCNA, CCNP logos
- **CompTIA**: A+, Network+, Security+ logos

---

**Happy customizing! 🎉** 