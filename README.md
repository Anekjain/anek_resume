# Digital Resume - React Portfolio

A modern, responsive digital resume built with React, Tailwind CSS, and Framer Motion. Features smooth animations, clean design, and mobile-first responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive across mobile, tablet, and desktop devices
- **Animations**: Smooth scroll-triggered animations using Framer Motion
- **Component-Based**: Modular, reusable components for easy customization
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool (recommended for new projects)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd digital-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### 1. Personal Information
Edit `src/data/resumeData.js` to update your personal information:

```javascript
export const resumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    profilePicture: "/your-photo.jpg" // Optional: add your photo
  },
  // ... other sections
};
```

### 2. Profile Picture
To add your profile picture:
1. Place your image in the `public` folder
2. Update the `profilePicture` path in `resumeData.js`
3. The component will automatically use your image instead of initials

### 3. Company Logos
To add company logos:
1. Create a `company-logos` folder in `public`
2. Add your company logo images
3. Update the `logo` paths in the experience section

### 4. Styling
Customize colors and styling in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      secondary: {
        // Your custom secondary colors
      }
    }
  }
}
```

### 5. Animations
Modify animations in individual components or create custom animations in `tailwind.config.js`.

## 📱 Responsive Design

The resume is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Option 1: GitHub Pages
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Add GitHub Pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 2: Vercel (Recommended)
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Option 3: Netlify
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `build` folder to Netlify

### Option 4: Firebase Hosting
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Header with contact info
│   ├── Summary.js      # Professional summary
│   ├── Experience.js   # Work experience
│   ├── Skills.js       # Technical & soft skills
│   ├── Certifications.js # Certifications
│   ├── Education.js    # Education history
│   ├── Hobbies.js      # Personal interests
│   └── Footer.js       # Footer with social links
├── data/
│   └── resumeData.js   # Resume content data
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles & Tailwind
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images are automatically lazy-loaded
3. **Code Splitting**: Consider implementing React.lazy() for larger components
4. **Bundle Analysis**: Use `npm run build --analyze` to analyze bundle size

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Inter Font](https://rsms.me/inter/) for typography

## 📞 Support

If you have any questions or need help customizing your resume, feel free to:
- Open an issue on GitHub
- Contact me at anekporwal1996@gmail.com

---

**Happy coding! 🎉**
