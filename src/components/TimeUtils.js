export const formatDateTime = (dateInput) => {
    console.log('Input to formatDateTime:', dateInput);  // Debug log
    try {
      const date = new Date(dateInput);
      console.log('Parsed date:', date);  // Debug log
      if (isNaN(date)) throw new Error('Invalid date');
  
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear().toString().slice(-2);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
  
      return `${day}-${month}-${year} ${hours}:${minutes}`;
    } catch (error) {
      console.error('Error in formatDateTime:', error);  // Debug log
      return 'Invalid Date';
    }
  };
  