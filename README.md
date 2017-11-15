[Link to page](https://matsuim.github.io/development/)

The goal of this application is to create a user interface that renders data live without having to refresh the page. A key element of an enjoyable user experience on many applications is the ability to sort and filter data, for example, looking at real estate, booking a flight, or even a simple search engine. Filtering and sorting allows the user to find what they are looking for more easily and efficiently.

The application I created utilizes layout design principles such as a grid and adding whitespace. I also took advantage of high contrast between text and background and used sans-serif typefaces and wide letter spacing to help maximize readability.

The highest level component in my application is the App component, which is where the data is created and is then passed into the next component down, which is the FilteredList. The FilteredList is a list that can be filtered, searched on, and sorted with the controls (i.e. buttons and menus) that are part of the component.

The FilteredList component has a state for search term, the type that's being filtered for, the size that's being filtered for, and the direction that the data is sorted in. When a search term is entered, the search term state is changed. When type is filtered for, the type filter state is changed to the type selected. When size is filtered for, the size filter state is changed to the selected size. Finally, when a sorting direction is selected, the sorting direction state is changed to reflect the selected state. In the FilteredList component, the data that was passed down from App is sorted based off of the sorting direction state, and then filtered/searched based on the size, type, and search states, and then passed to the List component.

The List component is a container for the entries. It parses each datapoint into its separate elements (i.e. name, age, etc.) and passes each element into an Entry component. The Entry component is the most lower level component and specifies how each element of a piece of data should appear in the List.
