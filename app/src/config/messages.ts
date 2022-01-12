enum messages {
  AccountCreated = 'Account has been created. Now you can sign in.',
  NoEmailInTheDB = 'There is no such email in the database.',
  LoginNotAvailable = 'This login is not available. Please try again.',
  EmailNotAvailable = 'This email is not available. Please try again.',
  PasswordResetSuccess = 'Request sent successfully. Please check your email.',
  ContactFormSuccess = 'Your message has been sent successfully.',
  NewsletterFormSuccess = 'Your have been subscribed successfully!',
  ValuesNotEqual = 'Given values are not equal. Try again.',
  EmailChangeSuccess = 'Your email has been changed successfully!',
  PasswordChangeSuccess = 'Your password has been changed successfully!',
  AccountDeleted = 'Your has been deleted!',
}

export default messages;
