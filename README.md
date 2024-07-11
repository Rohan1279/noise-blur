# Noise Blur Project

![Top Image](/image.png "Image for Noise Blur Project")
This project, built with Next.js, introduces a visually appealing effect combining noise and blur to create a dynamic background for a web application. The core of this effect is implemented using SVG filters, specifically `feTurbulence` and `feBlend` (though `feBlend` is commented out in the current implementation).

## SVG Filters

### feTurbulence

The `feTurbulence` filter is a key component in generating the noise effect. It is used within an SVG element to create a fractal noise pattern that can be adjusted dynamically through user input. The properties of `feTurbulence` used in this project include:

- `type`: Set to "fractalNoise" to generate a fractal noise pattern.
- `baseFrequency`: Controls the frequency of the fractal noise. In this project, it is dynamically adjusted with a range input by the user.
- `numOctaves`: The number of octaves for the noise function. It's set to "3" for a balanced level of detail in the noise pattern.
- `stitchTiles`: Ensures the noise tiles stitch together seamlessly. Set to "stitch" in this project.

### feBlend (Commented Out)

Although the `feBlend` filter is present in the code, it is currently commented out. If enabled, `feBlend` would allow for blending different graphics effects together. In the context of this project, it could be used to blend the noise effect with other graphical elements or effects to create more complex visuals.

## Implementation

The implementation of these SVG filters can be found in the `page.tsx` file within the `src/app` directory ([src/app/page.tsx](../../../d:/projects/noise-blur/src/app/page.tsx)). The file includes a dynamic SVG that applies the `feTurbulence` filter to a rectangle, creating the noise effect. The intensity of the noise and the level of blur applied to the background can be adjusted in real-time by the user through two range sliders.

## Getting Started

To run this project locally, follow the instructions in the [README.md](../../../d:/projects/noise-blur/README.md) file. This involves installing dependencies and starting the development server with `npm run dev`.

## Customization

Users can interact with the application through two range sliders that adjust the `blurValue` and `baseFrequency`, allowing for real-time customization of the noise and blur effects.

## Conclusion

The Noise Blur project showcases the power of SVG filters in creating dynamic and interactive web backgrounds. By leveraging `feTurbulence`, and potentially `feBlend`, developers can introduce a variety of visual effects that enhance the user experience.
