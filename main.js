// var product = 'Socks'

var app =new Vue({
    el:"#app",
    data:{
        product:'Socks',
        image:"/assets/socks-green.jpg",
        inStock:true,
        details:['80% cotton', '20% polyester', "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor:"green",
                variantImage:"/assets/socks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor:"blue",
                variantImage:"/assets/socks-blue.png"
            }
        ],
        cart:0,
    },
    methods:{
        addToCart: function (){
            this.cart +=1;
        },
        updateProduct( variantImage){
            this.image = variantImage;
        }
    }
})