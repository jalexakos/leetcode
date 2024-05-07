// from https://leetcode.com/problems/unique-email-addresses/description/

// chatGPT created this method for me
function filterEmailAddress(email: string): string {
    // Split the email address at the "@" symbol
    const [localPart, domainPart] = email.split("@");

    // Remove everything after the "+" symbol and remove all "."
    const filteredLocalPart = localPart.split("+")[0].replace(/\./g, "");

    // Combine the filtered local part with the domain part
    const filteredEmail = filteredLocalPart + "@" + domainPart;

    return filteredEmail;
}


function numUniqueEmails(emails: string[]): number {
    let set = new Set();

    for (let i = 0; i < emails.length; i++) {
        set.add(filterEmailAddress(emails[i]));
    }

    return set.size;
};

// runtime 67th percentile
// memory 66th percentile
