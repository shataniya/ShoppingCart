// 存放初始数据
const state = {
    // 存储购物车里的东西
    shoplist: [], // 默认购物车里没有商品
    // 所有的商品
    list: [
        {
            name: "Redmi K30 5G",
            image: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882053.33827103.jpg",
            desc: "双模5G，120Hz流速屏",
            price: 1999
        },
        {
            name: "Redmi K30",
            image: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575881724.64226888.jpg",
            desc: "120Hz流速屏，全速热爱",
            price: 1699
        },
        {
            name: "小米10 Pro",
            image: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493274.50817754.jpg",
            desc: "骁龙865 / 50倍变焦",
            price: 4999
        },
        {
            name: "Redmi 8",
            image: "https://i1.mifile.cn/f/i/2019/redmi1014/specs-1.png",
            desc: "5000mAh超长续航",
            price: 799
        },
        {
            name: "Redmi 红米电视 70英寸",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "70英寸震撼巨屏，4K画质，细腻如真",
            price: 2999
        },
        {
            name: "全面屏电视 55英寸E55X",
            image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "潮流全面屏设计",
            price: 1599
        },
        {
            name: "小米全面屏电视E55A",
            image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "全面屏设计，人工智能语音",
            price: 1599
        },
        {
            name: "小米电视4C 32英寸",
            image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "高清液晶屏，人工智能系统",
            price: 599
        },
        {
            name: "小米电视4A 70英寸",
            image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "大屏更享受",
            price: 2997
        },
        {
            name: "小米电视4C 43英寸",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "FHD全高清屏，钢琴烤漆",
            price: 988
        },
        {
            name: "小米电视4S 75英寸",
            image: "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=400&h=400",
            desc: "4K HDR，人工智能语音",
            price: 3799
        },
        {
            name: "小米全面屏电视65英寸 E65C",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "震撼大屏，时尚全面屏",
            price: 2699
        },
        {
            name: "小米全面屏电视E32C",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "全面屏设计，人工智能系统",
            price: 698
        },
        {
            name: "米家互联网洗烘一体机 Pro 10kg",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "智能洗烘，省心省力",
            price: 2999
        },
        {
            name: "Redmi全自动波轮洗衣机1A 8kg",
            image: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=400&h=400&f=webp&q=90",
            desc: "一键操作，父母都爱用",
            price: 799
        }
    ],
}

export default state