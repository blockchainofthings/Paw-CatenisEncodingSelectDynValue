/**
 * Created by claudio on 25/02/17.
 */

@registerDynamicValueClass
class CatenisEncodingSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisEncodingSelectDynValue';
    static title = 'Catenis Message Encoding Selection';
    static inputs = [
        DynamicValueInput('encoding', 'Encoding', "Select", {
            "choices": {
                "utf8": "1 - UTF-8",
                "base64": "2 - Base-64",
                "hex": "3 - Hex"
            }
        })
    ];

    evaluate(context) {
        return this.encoding;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.encoding;
    }
}
