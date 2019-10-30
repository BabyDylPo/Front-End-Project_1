// htmlGenerator is going to take in a string and htmlElement
// then create a new <p> element and append the string as a TextNode
// then append the new <p> element to the htmlElement
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // DOM WAY ---->
    // let newEle = document.createElement('p');
    // let newEleContent = document.createTextNode(string);
    // newEle.appendChild(newEleContent);
    
    // It is interesting that append vs appendChild have 
    // very different results
    // append() puts 'Party Time.' directly above 'Pocket Projects!'
    // append() also moves 'Pocket Projects!' to the bottom of <body>
    // appendChild() puts 'Party Time.' below with 5 <br> element in between
    // using both append() and appendChild() together creates
    // the ideal result with 'Pocket Projects!' directly above 'Party Time.'

    // I will stick with appendChild() for now, no particular reason

    // document.body.append(newEle, htmlElement);
    // document.body.appendChild(newEle, htmlElement);

    // JQUERY WAY ----->
    // this works ideally and is simple

    // $newEle is a <p> element 
    let $newEle = $("<p></p>");
    
    // the param string is then added to the <p> element as text
    $newEle.text(string);
    
    // $parentEle is a jquery object of the param htmlElement
    let $parentEle = $(htmlElement);

    // does $parentEle have any children? 
    let children = Array.from($parentEle.children())
    // If Yes, then DESTROY THEM ALL
    if (children) {
        children.forEach((child) => {
            child.remove();
        })
    }
    // and move on as if nothing happened...

    // $newEle object is then appended as a child to $parentEle
    $parentEle.append($newEle);
};

htmlGenerator('Party Time.', partyHeader);