# ProSite - Professional Website Template

A modern, responsive website built with React, TypeScript, and Tailwind CSS featuring user authentication, navigation, and component-based architecture.

## 🚀 Features

### Core Components
- **Sign-Up Page**: Complete user registration form with real-time validation
- **Responsive Navigation**: Mobile-first navigation bar with hamburger menu
- **UserCard Component**: Reusable card component for displaying user information
- **Multi-page Routing**: Seamless navigation between pages using React Router

### Design & UX
- **Professional Design**: Clean, modern interface with consistent styling
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Form Validation**: Real-time validation with visual feedback
- **Micro-interactions**: Smooth transitions and hover effects
- **Accessibility**: High contrast ratios and keyboard navigation support

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for single-page application
- **Component Architecture**: Modular, reusable components
- **State Management**: React hooks for form state and validation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.tsx   # Responsive navigation bar
│   └── UserCard.tsx     # User information card component
├── pages/               # Page components
│   ├── Home.tsx         # Landing page with features showcase
│   ├── About.tsx        # About page with company information
│   ├── Contact.tsx      # Contact form and information
│   └── SignUp.tsx       # User registration form
├── App.tsx              # Main application component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prosite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action buttons
- Features showcase with icons and descriptions
- User cards demonstration section
- Responsive design with mobile optimization

### About Page (`/about`)
- Company story and mission
- Core values with visual icons
- Team information and career opportunities
- Professional layout with engaging content

### Contact Page (`/contact`)
- Contact information with icons
- Interactive contact form
- Map placeholder for location
- Form validation and submission handling

### Sign-Up Page (`/signup`)
- Complete user registration form
- Real-time form validation
- Password strength requirements
- Visual feedback for form states
- Responsive design for all devices

## 🎨 Component Documentation

### Navigation Component
```tsx
// Responsive navigation with mobile menu
<Navigation />
```

**Features:**
- Sticky header with shadow
- Mobile hamburger menu
- Active link highlighting
- Smooth transitions

### UserCard Component
```tsx
// Display user information in card format
<UserCard 
  name="John Doe" 
  email="john@example.com" 
/>
```

**Props:**
- `name` (string): User's full name
- `email` (string): User's email address

**Features:**
- Gradient avatar placeholder
- Hover effects
- Action button
- Responsive layout

## 🔧 Customization

### Colors
The project uses a consistent color system defined in Tailwind CSS:
- **Primary**: Blue (`blue-600`, `blue-700`)
- **Secondary**: Gray (`gray-50` to `gray-900`)
- **Success**: Green (`green-500`, `green-600`)
- **Error**: Red (`red-500`, `red-600`)

### Typography
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with 150% line height
- **Interactive Elements**: Medium weight for emphasis

### Spacing
Uses an 8px grid system for consistent spacing throughout the application.

## 📋 Form Validation Rules

### Sign-Up Form
- **Full Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 8 characters with:
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

For support, email support@prosite.com or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**