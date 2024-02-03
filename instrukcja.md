zestaw 12

Create a form that will contain the following fields:

- name - dish name (text field)
- preparation_time - preparation time (duration field, would be nice if the input will be formatted like 00:00:00)
- type - dish type (select field with the following options: pizza, soup, sandwich) after selecting dish type, conditionally display other fields:

  for pizza:

- no_of_slices - # of slices (number field)
- diameter - diameter (float field)

  for soup:

- spiciness_scale - spiciness scale (1-10)
  for sandwich:
- slices_of_bread - number of slices of bread required (number field)

  All fields should be required

  Data should be submitted via POST request as a JSON and the form should support returned validation errors (if any).
