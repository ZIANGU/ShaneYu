#!/bin/bash

set -euo pipefail

DIST_DIR="dist"
TEMPLATES_DIR="templates"
TARGET_NAME="halo-theme-ShaneYu.zip"
THEME_YAML="theme.yaml"
BUILD_NUMBER_FILE=".build-number"

echo "📦 Starting build and package process..."

# Auto-increment version
CURRENT_VERSION=$(grep '^  version:' "$THEME_YAML" | sed 's/  version: *//')
MAJOR=$(echo "$CURRENT_VERSION" | cut -d. -f1)
MINOR=$(echo "$CURRENT_VERSION" | cut -d. -f2)

BUILD_NUMBER=0
if [ -f "$BUILD_NUMBER_FILE" ]; then
  BUILD_NUMBER=$(cat "$BUILD_NUMBER_FILE")
fi
BUILD_NUMBER=$((BUILD_NUMBER + 1))
echo "$BUILD_NUMBER" > "$BUILD_NUMBER_FILE"

NEW_VERSION="${MAJOR}.${MINOR}.${BUILD_NUMBER}"
sed -i '' "s/^  version: .*/  version: ${NEW_VERSION}/" "$THEME_YAML"
echo "🔢 Version: $CURRENT_VERSION -> $NEW_VERSION (build #$BUILD_NUMBER)"

# Clean up old build artifacts
echo "🧹 Cleaning up old artifacts..."
if [ -d "$TEMPLATES_DIR" ]; then
  rm -rf "$TEMPLATES_DIR"
  echo "   Removed $TEMPLATES_DIR/"
fi
if [ -d "$DIST_DIR" ]; then
  rm -rf "$DIST_DIR"/*.zip 2>/dev/null || true
  echo "   Removed old zip files in $DIST_DIR/"
fi

echo "1/6 Checking and fixing formatting..."
npx vp check --fix || true

echo "2/6 Compiling TypeScript..."
npx tsc

echo "3/6 Building with Vite..."
npx vp build

echo "4/6 Packaging theme..."
npx theme-package

if [ ! -d "$DIST_DIR" ]; then
  echo "dist directory not found"
  exit 1
fi

ZIP_FILES=("$DIST_DIR"/*.zip)

if [ ! -f "${ZIP_FILES[0]}" ]; then
  echo "No zip file found in dist/"
  exit 1
fi

TARGET_PATH="$DIST_DIR/$TARGET_NAME"

if [ -f "$TARGET_PATH" ]; then
  rm "$TARGET_PATH"
fi

SOURCE_PATH="${ZIP_FILES[0]}"
SOURCE_NAME=$(basename "$SOURCE_PATH")

mv "$SOURCE_PATH" "$TARGET_PATH"

echo ""
echo "✅ Renamed: $SOURCE_NAME -> $TARGET_NAME"
echo "   Path: $TARGET_PATH"

# Clean up templates directory after packaging
echo "🧹 Cleaning up templates directory..."
if [ -d "$TEMPLATES_DIR" ]; then
  rm -rf "$TEMPLATES_DIR"
  echo "   Removed $TEMPLATES_DIR/"
fi

echo "✅ Build and package complete! Version: $NEW_VERSION"