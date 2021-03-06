////////////////////////////////////////////////////////////////////////////////
// gaussianFilter.js
////////////////////////////////////////////////////////////////////////////////


class GrayScaleFilter extends ImageFilter {

    constructor() {

    }

    grayScale(imageData) {
        var data = imageData;

        for (var i = 0; i < data.length; i += 4) {
            var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];

            data[i] = brightness;      // red
            data[i + 1] = brightness;  // green
            data[i + 2] = brightness;  // blue
        }

        return data;
    }
}
