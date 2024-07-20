var productReviewsInfo = [
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: null,
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },
    {
        img: 'images/products/review/pic1.png',
        description: '"Lorem ipsum dolor sit amet, OneFiprovides extra rear-facing legroom"',
        name: 'Anthony',
        socreL: 5,
    },

]

var state1 = 1, state2 = 1, state3 = 1, index = 0, count = 0, row = 3, column = row * 3;
function reviewsApend(i, pos) {
    if (productReviewsInfo[i].img === null) {
        document.getElementById(`Product_Reviews${pos}`).innerHTML += `<div class="radius-10 px-3 bg-white p-2 d-flex align-items-start gap-3 mb-3 wow fadeInUp" data-wow-delay="0.1">
        <div>
            <div class="d-flex gap-1">
                <i class="iconly-Bold-Star text-yellow"></i>
                <i class="iconly-Bold-Star text-yellow"></i>
                <i class="iconly-Bold-Star text-yellow"></i>
                <i class="iconly-Bold-Star text-yellow"></i>
                <i class="iconly-Bold-Star text-yellow"></i>
            </div>
            <p class="mt-2">${productReviewsInfo[i].description}</p>
            <span class="fw-bold ">${productReviewsInfo[i].name}</span>
        </div>
    </div>`
    } else {
        document.getElementById(`Product_Reviews${pos}`).innerHTML += `<div class="radius-10 bg-white p-2 d-flex align-items-start gap-3 mb-3 wow fadeInUp" data-wow-delay="0.1">
                        <img src='${productReviewsInfo[i].img}' class="rounded-10" alt="img" style="width: 40%">
                        <div>
                            <div class="d-flex gap-1">
                                <i class="iconly-Bold-Star text-yellow"></i>
                                <i class="iconly-Bold-Star text-yellow"></i>
                                <i class="iconly-Bold-Star text-yellow"></i>
                                <i class="iconly-Bold-Star text-yellow"></i>
                                <i class="iconly-Bold-Star text-yellow"></i>
                            </div>
                            <p class="mt-2">${productReviewsInfo[i].description}</p>
                            <span class="fw-bold ">${productReviewsInfo[i].name}</span>
                        </div>
                    </div>`
    }
}
function productReviewsLanding() {
    
        for (let i = index; i < productReviewsInfo.length; i++) {
            if (Math.floor(document.getElementById('Product_Reviews1').childElementCount / row) == state1 && (document.getElementById('Product_Reviews1').childElementCount +
                document.getElementById('Product_Reviews2').childElementCount +
                document.getElementById('Product_Reviews3').childElementCount) % column === 0) {
                    index = document.getElementById('Product_Reviews1').childElementCount +
                    document.getElementById('Product_Reviews2').childElementCount +
                    document.getElementById('Product_Reviews3').childElementCount; break;
            }
            if (document.getElementById('Product_Reviews1').childElementCount % row != 0 || Math.floor(document.getElementById('Product_Reviews1').childElementCount / row) != state1) {
                reviewsApend(i, 1);
            } else if (document.getElementById('Product_Reviews2').childElementCount % row != 0 || Math.floor(document.getElementById('Product_Reviews2').childElementCount / row) != state2) {
                reviewsApend(i, 2);
            } else if (document.getElementById('Product_Reviews3').childElementCount % row != 0 || Math.floor(document.getElementById('Product_Reviews3').childElementCount / row) != state3) {
                reviewsApend(i, 3);
            }
            count++;
        }
        if (document.getElementById('Product_Reviews1').childElementCount +
        document.getElementById('Product_Reviews2').childElementCount +
        document.getElementById('Product_Reviews3').childElementCount == productReviewsInfo.length) document.getElementById('show_more').style.display = 'none';
}

function showMore() {
    state1 += 1;
    state2 += 1;
    state3 += 1;
    productReviewsLanding();
}
document.getElementById('Product_Reviews1').innerHTML = ''
document.getElementById('Product_Reviews2').innerHTML = ''
document.getElementById('Product_Reviews3').innerHTML = ''
productReviewsLanding();
