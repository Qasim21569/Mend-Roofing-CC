# Mend Roofing - Vercel Deployment Guide 🚀

## Prerequisites
- GitHub account with the repository: `https://github.com/Qasim21569/Mend-Roofing-CC.git`
- Vercel account (sign up at https://vercel.com)

---

## Deployment Steps

### 1. Push Your Latest Changes to GitHub

Make sure all your work is committed and pushed:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

**Option A: Via Vercel Dashboard**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository: `Qasim21569/Mend-Roofing-CC`
4. Click "Import"

**Option B: Via Vercel CLI** (if you have it installed)
```bash
npm i -g vercel
vercel
```

### 3. Configure Project Settings

Vercel will auto-detect Next.js. Confirm these settings:

**Framework Preset:** Next.js
**Build Command:** `npm run build`
**Output Directory:** `.next` (auto-detected)
**Install Command:** `npm install`
**Development Command:** `npm run dev`

### 4. Environment Variables (Important!)

Add these environment variables in Vercel Dashboard:
- Go to your project → Settings → Environment Variables

**Required:**
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyBm0LkkTim0WuseYwItow8Cs71QC077VOc
```

**Optional (if using Firebase):**
```
NEXT_PUBLIC_FIREBASE_API_KEY = your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID = your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID = your_firebase_app_id
```

### 5. Deploy

Click **"Deploy"** button and wait for build to complete (usually 2-3 minutes).

---

## Post-Deployment

### Custom Domain Setup (Optional)

1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `mendroofing.vercel.app` or `www.mendroofing.com`)
3. Update DNS records as instructed by Vercel

### SSL Certificate
- Vercel automatically provides SSL certificates
- Your site will be available at `https://your-domain.vercel.app`

---

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- **Production:** Pushes to `main` branch
- **Preview:** Pushes to other branches or pull requests

---

## Troubleshooting

### Build Fails

**Check for TypeScript errors:**
```bash
npm run typecheck
```

**Check for linting issues:**
```bash
npm run lint
```

**Test build locally:**
```bash
npm run build
```

### Common Issues

**1. Image Optimization Error:**
- Make sure all images in `/public` folder are accessible
- Check image paths are correct (use `/image.png` not `./image.png`)

**2. Missing Environment Variables:**
- Double-check all required env vars are set in Vercel dashboard
- Prefix public variables with `NEXT_PUBLIC_`

**3. Module Not Found:**
- Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check all imports are correct

---

## Monitoring

### Analytics
- Go to your project → Analytics
- View real-time traffic, performance metrics

### Logs
- Go to your project → Deployments → [Select deployment] → Runtime Logs
- Check for any errors or warnings

---

## Performance Optimization

Already configured in the project:
- ✅ Next.js 15 (latest version)
- ✅ Image optimization with Next.js Image component
- ✅ Static generation where possible
- ✅ Turbopack for faster dev builds
- ✅ Tree-shaking and code splitting

---

## Project URLs

After deployment, you'll get:
- **Production:** `https://mend-roofing-cc.vercel.app` (or your custom domain)
- **Preview:** `https://mend-roofing-cc-[hash].vercel.app` (for each commit)

---

## Team Collaboration

### Adding Team Members
1. Go to your project → Settings → Members
2. Invite team members via email
3. Assign roles: Owner, Member, or Viewer

### Branch Previews
Each push to any branch creates a unique preview URL:
- Useful for testing before merging to main
- Share preview links with clients for approval

---

## Deployment Checklist

Before deploying:
- [ ] All changes committed and pushed to GitHub
- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No linting errors (`npm run lint`)
- [ ] Environment variables documented
- [ ] Logo and images in `/public` folder
- [ ] Test all forms and interactive features

After deploying:
- [ ] Check production URL loads correctly
- [ ] Test all pages and links
- [ ] Verify forms submission works
- [ ] Check mobile responsiveness
- [ ] Test contact phone numbers
- [ ] Verify Google Maps display
- [ ] Check SEO meta tags

---

## Support

**Vercel Documentation:** https://vercel.com/docs
**Next.js Documentation:** https://nextjs.org/docs

**Common Commands:**
```bash
# Redeploy latest commit
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs [deployment-url]

# Link local project to Vercel
vercel link
```

---

## Notes

- **Build Time:** ~2-3 minutes
- **Deployment Region:** US East (IAD1) - configured in `vercel.json`
- **Node Version:** Automatically detected from `package.json`
- **Next.js Version:** 15.3.3

---

**Project:** Mend Roofing Website
**Framework:** Next.js 15 + TypeScript + Tailwind CSS
**Repository:** https://github.com/Qasim21569/Mend-Roofing-CC.git
**Status:** ✅ Ready for Deployment

