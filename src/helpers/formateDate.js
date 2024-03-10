function convertToAntDatePickerDate(dateString) {
    // Split the date string into its components
    const parts = dateString.split('-');

    // Add leading zeros if necessary
    const month = parts[0].length === 1 ? '0' + parts[0] : parts[0];
    const day = parts[1].length === 1 ? '0' + parts[1] : parts[1];

    // Reorder the date components to form the "MM-DD-YYYY" format
    const antDatePickerDate = `${month}-${day}-${parts[2]}`;

    return antDatePickerDate;
}

export {convertToAntDatePickerDate}