export const htmlspecialchars = (formData: string): string =>
    formData.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
