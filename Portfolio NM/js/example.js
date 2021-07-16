let view_check = true; // variable used to check if viewport is above/below a certain size


//makes all comments hidden by giving them the 'hidden' CSS class
document.querySelectorAll(".commentsArea *").forEach((items) => {
    items.classList.add('hidden');
});


/* function for adding/removing the 'hidden' class on hover, which makes the comments
appear when the line of code is moused over */
function hoverSwitch(watchLoc, tarLoc) {
    document.querySelectorAll(watchLoc).forEach((watchItem) => {
        watchItem.addEventListener('mouseover', () => {
            document.querySelectorAll(tarLoc).forEach((tarItem) => {
                tarItem.classList.remove('hidden');
            })
        })
    });
    document.querySelectorAll(watchLoc).forEach((watchItem) => {
        watchItem.addEventListener('mouseout', () => {
            document.querySelectorAll(tarLoc).forEach((tarItem) => {
                tarItem.classList.add('hidden');
            })
        })
    });
};

//function to enact hover functions for relevant lines of code IF viewport is below 576px
function hoverSet() {
    // if(view_check === true) {
        hoverSwitch('#line_one', '.mixinC');
        hoverSwitch('.retMixinL', '.retMixinC');
        hoverSwitch('.callVarL', '.callVarC');
        hoverSwitch('.baseL', '.baseC');
        hoverSwitch('.iconL', '.iconC');
        hoverSwitch('.pseudoL', '.pseudoC');
    // }
}

/*makes check to see if viewport is below 576px, and if it is, removes 'hidden' class and
shows all comments (for scrolling purposes) */
function viewSize() {
    if(screen.width <= 576) {
        document.querySelectorAll(".commentTitle, .commentP").forEach((items) => {
            items.classList.add('shownOveride');
        });
        view_check = false;
    } else {
        document.querySelectorAll(".commentTitle, .commentP").forEach((items) => {
            items.classList.remove('shownOveride');
        });
        view_check = true;
    }
}


window.addEventListener('load', () => {
    viewSize();
    hoverSet();
});
// window.onload = viewSize();
window.addEventListener('resize', viewSize);

/* ISSUE: when viewport is below 576px, comments are shown. However, hovering over a line
removes that comment and it will not show back up. */