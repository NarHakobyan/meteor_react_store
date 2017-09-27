export default class {
    constructor(rules) {
        this.rules = {};
        for (let field of Object.keys(rules)) {
            this.rules[field] = Object.assign({ errors: [], valid: false, touched: false, state: '' }, rules[field]);
        }
    }
    
    // This method checks to see if the validity of all validators are true
    get valid() {
        for (let field of Object.keys(this.rules)) {
            if (!this.rules[field].valid) {
                return false;
            }
        }
        return true;
    }
    
    /**
     * This function updates the state of the validator for the specified validator
     */
    validate(fieldName, value) {
        this.rules[fieldName].errors = [];
        this.rules[fieldName].state = value;
        this.rules[fieldName].valid = true;
        this.rules[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.rules[fieldName].errors.push(rule.message);
                    this.rules[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.rules[fieldName].errors.push(rule.message);
                    this.rules[fieldName].valid = false;
                }
            }
        });
    }
    
    touchField(fieldName) {
        console.log('touch', fieldName);
        this.rules[fieldName].touched = true;
    }
    
    // This function resets all validators for this form to the default state
    reset() {
        Object.keys(this.rules).forEach((fieldName) => {
            this.rules[fieldName].errors = [];
            this.rules[fieldName].state = '';
            this.rules[fieldName].touched = false;
            this.rules[fieldName].valid = false;
        });
    }
    
    // This function displays the validation errors for a given input field
    getErrors(fieldName) {
        if (!this.rules[fieldName].touched) {
            return [];
        }
        return this.rules[fieldName].errors;
    }
}