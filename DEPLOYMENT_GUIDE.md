# 🚀 Vercel Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)
- Git installed on your computer

---

## 📋 Deployment Steps

### 1. Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Dhanya Sharma Portfolio"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/dhanya-sharma-portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **"Deploy"**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## ⚙️ Vercel Configuration

The project is already configured with optimal settings:

### `next.config.ts`
```typescript
const config = {
  // Already configured for production
};
```

### Build Settings (Auto-detected by Vercel)
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

---

## 🌐 Custom Domain Setup

### After Deployment:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `dhanyasharma.com`)
4. Follow DNS configuration instructions:
   - Add A record or CNAME record as instructed
   - Wait for DNS propagation (5-30 minutes)

### Recommended Domain Setup:
- Primary: `gyanameducation.com`
- Alternate: `dhanyasharma.com`
- Subdomain: `www.gyanameducation.com`

---

## 🔧 Environment Variables (Optional)

If you need to add environment variables later:

1. Go to **Settings** → **Environment Variables**
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (for Google Analytics)
   - `CONTACT_EMAIL`

---

## 📊 Post-Deployment Checklist

### Immediate Actions:
- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Check contact form functionality
- [ ] Verify all links work
- [ ] Test navigation menu

### SEO Setup:
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Set up Google Tag Manager
- [ ] Verify Open Graph tags (share on social media)
- [ ] Check page load speed (PageSpeed Insights)

### Content Updates:
- [ ] Replace placeholder images with actual photos
- [ ] Update contact information
- [ ] Add real social media links
- [ ] Verify all program details
- [ ] Update testimonials with real data

---

## 🎯 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Automatic compression

---

## 🔍 SEO Configuration

### Google Search Console Setup:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (use HTML tag method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Update Metadata:

In `app/layout.tsx`, update:
```typescript
export const metadata = {
  // Update with your actual domain
  metadataBase: new URL('https://gyanameducation.com'),
  verification: {
    google: 'your-google-verification-code',
  },
};
```

---

## 📱 Social Media Integration

Update social links in:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`

Replace `#` with actual URLs:
- LinkedIn: `https://linkedin.com/in/dhanyasharma`
- Twitter: `https://twitter.com/gyanameducation`
- Instagram: `https://instagram.com/gyanameducation`

---

## 🐛 Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading:
- Ensure images are in `public/images/` folder
- Use correct paths: `/images/filename.jpg`

### 404 Errors:
- Check file names match routes
- Verify `page.tsx` exists in each route folder

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel will automatically deploy!
```

---

## 📈 Analytics Setup

### Google Analytics:

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

---

## 🎉 Success!

Your website is now live! 

**Next Steps:**
1. Share your website URL
2. Monitor analytics
3. Gather user feedback
4. Iterate and improve

---

## 📞 Support

If you encounter issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Create an issue in your repository

---

**Deployment Time:** ~5 minutes  
**Build Time:** ~2 minutes  
**Global Availability:** Instant via Vercel Edge Network

🚀 **Happy Deploying!**
