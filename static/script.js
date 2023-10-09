document.addEventListener('DOMContentLoaded', () => {
  const visualizationContainers = document.querySelectorAll('.visualization-container');

  visualizationContainers.forEach(container => {
    const image = container.querySelector('img');
    const details = container.querySelector('.details');

    container.addEventListener('mouseenter', () => {
      container.style.backgroundColor = '#f0f0f0';
    });

    container.addEventListener('mouseleave', () => {
      container.style.backgroundColor = '';
    });

    container.addEventListener('click', () => {
      const visualizationTitle = container.querySelector('h2').innerText;
      const comment = getComment(visualizationTitle);

      // Show the comment in a tooltip
      showTooltip(container, comment);
    });
  });
});

function getComment(visualizationTitle) {
  switch (visualizationTitle) {
    case 'Age Distribution by Gender (Bar Chart)':
      return 'The age groups between 20-29 and 40-49 have the highest insurance counts.';
    case 'BMI Distribution by Gender (Bar Chart)':
      return 'Males insured have higher body Mass Index (BMI) as compared to females.';
    case 'Insurance Charges by Age (Trend - Line Chart)':
      return 'Shows the average insurance charges for each age. It is evident that the older you get, the higher the charges.';
    case 'Insurance Charges by BMI':
      return 'Shows the average insurance charges for different BMI categories. This clearly indicates that the higher your BMI, the higher the charges you incur.';
    case 'Average Insurance Charges by Gender and Smoking Status':
      return 'This chart shows there are more male smokers compared to females. The chart also shows that smokers face higher charges as compared to non-smokers.';
    default:
      return 'No comment available.';
  }
}

function showTooltip(container, comment) {
  // Remove existing tooltips
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => tooltip.remove());

  // Create a tooltip element
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerText = comment;

  // Append the tooltip to the visualization container
  container.appendChild(tooltip);

  // Remove the tooltip after a few seconds
  setTimeout(() => {
    tooltip.remove();
  }, 5000);  // Remove after 5 seconds
}
