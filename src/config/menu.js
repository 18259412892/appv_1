export default  [
        {
            name:'内容',
            children:[
                {
                    name:'发布文章',
                    path:'/article'
                }
            ]
        },
        {
            name:'订单',
            children:[
                {
                    name:'列表',
                    path:'/orderlist'
                }
            ]
        },
        {
            name:'表单',
            children:[
                {
                    name:'Form',
                    path:'/form'
                },
                {
                    name:'forminfoAdd',
                    path:'/forminfoAdd'
                },
                {
                    name:'forminfoEdit',
                    path:'/forminfoEdit'
                },
               
            ]
        },
        {
            name:'图表',
            children:[
                {
                    name:'Nestedpies',
                    path:'/Nestedpies'
                },
                 {
                    name:'报表页面',
                    path:'/echartslist'
                },
                {
                    name:'地图',
                    path:'/bmap'
                }
            ]
        }
]