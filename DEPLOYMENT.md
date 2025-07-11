# Netlify Deployment Guide

## Current Configuration

Your project is now properly configured for Netlify deployment with Stackbit integration:

### netlify.toml
```toml
[build]
  command = "npm run build:netlify"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
  NODE_ENV = "production"
  CI = "true"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  NODE_ENV = "production"

[context.deploy-preview.environment]
  NODE_ENV = "production"

[context.branch-deploy.environment]
  NODE_ENV = "production"
```

### Stackbit Configuration
- **Content Source**: Git-based CMS using Stackbit
- **Content Location**: `public/content/` (copied to `dist/content/` during build)
- **Models**: Services, Projects, BlogPost (all as page models)
- **Configuration**: `stackbit.config.ts`

## Key Changes Made

1. **Migrated from Netlify CMS to Stackbit**:
   - Removed Netlify CMS admin interface
   - Installed Stackbit dependencies
   - Created `stackbit.config.ts` with proper content models

2. **Content Structure**:
   - Converted Markdown files to JSON format
   - Moved content to `public/content/` for build inclusion
   - Updated React components to load JSON instead of Markdown

3. **Build Optimization**:
   - Added explicit production build script
   - Configured proper environment variables
   - Ensured content files are included in build output

## Content Models

### Services Page
- **File**: `public/content/services.json`
- **URL**: `/services`
- **Fields**: title, description, body

### Projects Page
- **File**: `public/content/projects.json`
- **URL**: `/projects`
- **Fields**: title, description, body

### Blog Posts
- **File**: `public/content/blog/{slug}.json`
- **URL**: `/blog/{slug}`
- **Fields**: title, date, description, body

## Deployment Steps

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Migrate to Stackbit CMS and fix Netlify deployment"
   git push
   ```

2. **Deploy to Netlify**:
   - Connect your repository to Netlify
   - Build command: `npm run build:netlify`
   - Publish directory: `dist`
   - Node version: 18

## Content Management

### Adding New Blog Posts
1. Create a new JSON file in `public/content/blog/`
2. Follow the BlogPost model structure:
   ```json
   {
     "title": "Your Post Title",
     "date": "2024-01-01",
     "description": "Post description",
     "body": "# Your Post\n\nContent here..."
   }
   ```

### Editing Existing Content
1. Edit the JSON files in `public/content/`
2. Commit and push changes
3. Netlify will automatically rebuild and deploy

## Troubleshooting

If you encounter issues:

1. **Build Fails**: Check Netlify build logs for errors
2. **Content Not Loading**: Verify JSON files are in `public/content/`
3. **Routes Not Working**: Ensure SPA redirects are configured in `netlify.toml`
4. **Stackbit Issues**: Check `stackbit.config.ts` for model configuration

## Build Output

Your build generates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Optimized CSS and JS bundles
- `dist/content/` - JSON content files for Stackbit
- `dist/` - Other static assets

The build process takes about 5-6 minutes and creates optimized bundles for production. 