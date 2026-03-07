# Welcome to the CS Games 2025 Web Competition!

## Context

![Démonstration du jeu à produire](Documentation/demo.gif)

For this challenge, you must implement a 2D game. The following sections describe in detail what is expected. Each section contains requirements and the points associated with them. For each section, you must implement the requirements in **chronological order**.

**WARNING**: If you do not implement the requirements in chronological order, only the points for the lowest completed requirement will be awarded. For example, if you implement requirements 1, 3, and 5, you will only receive the points for requirement 1.

## Limits

You can't use LLMs, but you have the right to use internt. You are not allowed to download new npm packages. You can use `react-router-dom` to help you create pages and navigate through them.

## Command to Run the Game

To run the game, use the following command in the frontend folder:

```npm run dev```


The application should then appear on the screen.

## Evaluation Grid

The following sections detail the required implementations, but the evaluation grid is also provided in the file `Correction CSGames - English.pdf`.

## Sections to Complete

### Navigation Bar

1. Create a navigation bar that allows users to access the following pages: Game Page and Easter Egg. Note that the “Easter Egg” page must initially be hidden in the navigation bar. **(1 point)**

2. Place the navigation bar on the left side of the screen. **(3 points)**

![Barre de navigation initiale](Documentation/NavBar/navigation-bar-initPNG.png)


3. Make the navigation bar collapsible. The user must be able to adjust the width of the navigation bar using the cursor. When the navigation bar becomes too small, an emoji must replace the text. For example, when the bar is expanded, it should display Game Page and Easter Egg. When the bar is collapsed, it should display 🌟 and 🐣. **(5 points)**

![Barre de navigation complète](Documentation/NavBar/navigation-bar-complete.png)


## Game Page
## Trees

1. Add one tree of each type: 🌳 🌴 🏝️ **(1 point)**

![Arbres de toutes sortes](Documentation/Tree/trees-of-everykind.png)

2. When the user presses the space bar, the palm tree trunk must gradually shrink until it completely disappears. A trace of the hit must also be visible. **(2 points)**

![starting to cut](Documentation/Tree/trees-hitting-the-tree.png)

![continue to cut](Documentation/Tree/tree-being-cut.png)

![almost done](Documentation/Tree/tree-almost-cut.png)

![tree is cut](Documentation/Tree/tree-is-cut.png)


3. A list of trees must be displayed below the canvas. This list must iterate through all trees present on the canvas. The X position of each tree as well as its illustration must be visible. When a tree disappears in the previous step, it must no longer appear in the list. **(3 points)**

![list of trees](Documentation/Tree/delete-tree.png)


4. An “Add Tree” button and a “Delete Tree” button must be present to allow users to add and remove a tree. When the user clicks the “Add Tree” button, a modal window must appear, allowing them to choose the desired tree type. The tree must appear at a random position. When the user clicks the “Delete Tree” button, the tree must be removed from the list. **(4 points)**

![list of trees](Documentation/Tree/tree-add-tree.png)

![list of trees](Documentation/Tree/modal-select-tree.png)


5. When the user clicks on a tree with the mouse, it must be possible to resize it. A bounding box with handles must appear around the tree, allowing the user to increase or decrease its height and width. **(5 points)**

![dimensions of tree](Documentation/Tree/tree-dimensions.png)

## Mystery Cube
1. Add a mystery cube [ ? ] **(1 point)**

2. When the player comes into contact with the mystery cube [ ? ], a sound effect must be played. **(2 points)**

3. When the player comes into contact with the mystery cube [ ? ], a red mushroom must appear on top of the cube. **(3 points)**

![mystery cube](Documentation/MysteryCube/mystery-cube.png)

4. When the player comes into contact with the mystery cube [ ? ], the cube must block the character. The character must not be able to pass through the cube. **(4 points)**

5.  **(5 points)**

## Mushroom

1. When the player comes into contact with a mushroom, the mushroom 🍄 must disappear and a sound effect must be played. **(1 point)**

2. The first time the player “eats” a mushroom (makes it disappear), the 🐣 Easter Egg tab, initially hidden in the navigation bar, must appear. Note that an emoji must also appear next to each page name in the navigation bar: 🌟 Game Page & 🐣 Easter Egg. **(2 points)**

![Barre de navigation complète](Documentation/NavBar/navigation-bar-complete.png)


3. The second time the player “eats” a mushroom, a modal window must appear and allow the user to choose one of three available characters: the knight, the fish bowl, or the knight with glasses. The character choice must be persistent. When the page is refreshed, the selected character must be preserved. **(3 points)**

![character](frontend/src/assets/characters/cool-character.png)

![character](frontend/src/assets/characters/main-character-fish.png)

![character](frontend/src/assets/characters/main-character.png)

![character](frontend/src/assets/characters/monster.png)

4. The third time the player “eats” a mushroom, a ghost trail of the character must appear. The most recent trails must be opaque, while the oldest trails must be transparent. **(4 points)**
![Barre de navigation complète](Documentation/MysteryCube/ghost-character-rainbow.png)

5. The ghost trail of the character must be rainbow-colored. You may not use tools like Photoshop to help you; you must code a function that modifies the color of the provided PNG. **(5 points)**

![Barre de navigation complète](Documentation/MysteryCube/ghost-character.png)


## Clouds

1. Add all clouds ☁️ ☁️ ☁️ **(1 point)**

2. When the player is in front of the sign with a cloud symbol and presses the space bar, a thunder sound effect must be played. A lightning bolt must also appear on the second cloud. **(2 points)**

![rain](Documentation/Clouds/lightning.png)

3. When the player is in front of the sign with a cloud symbol and presses the space bar, the canvas colors must be inverted for the duration of the thunder sound effect. **(3 points)**

![rain](Documentation/Clouds/color-inversion.png)

4. When the thunder sound occurs, the application theme must switch from a light theme to a dark theme. The dark theme must be persistent. **(4 points)**

5. Once the canvas colors return to normal, the clouds must start raining. The raindrops must have different sizes to give an illusion of depth. When the droplets hit the ground, they must produce splashes. **(5 points)**

![rain](Documentation/Clouds/rain.png)

## Ground Objects

1. Add one ground object of each type (bottles, bushes, flowers) (at least one of each). **(1 point)**

2. A “Random” button must be present. When the user clicks this button, the elements must be given new random positions on the ground. **(2 points)**

![rain](Documentation/Tree/tree-add-tree.png)

3. The position of the objects must be persistent, meaning that if the page is refreshed, the objects must remain in the same positions (object persistence). **(3 points)**

4. When a user clicks on a ground object (bottle, bush, or flower), it must be possible to move it via drag and drop. In other words, when an object is selected using the left mouse button, its position must be adjustable until the mouse button is released. **(4 points)**

5. When the user repositions an object, if it is released in the air, the object must be affected by gravity and fall back to the ground. If the object is placed below the ground, it must reappear at its initial position. A ghost image of the object must remain at the initial position until the object can be placed at a new valid position. **(5 points)**

![rain](Documentation/Ground/ghost-version-of-items-moving.png)

### Easter Egg

1. Create the Easter Egg page. **(1 point)**

2. Display the name of your university, the name of each person who completed the challenge, and the name of your team. **(5 points)**

3. Create a meme related to the retro theme. **(10 points)**

![rain](Documentation/meme-character.png)

### User Experience (UI/UX)

Quality of the user experience and graphical interface **(10 points)**