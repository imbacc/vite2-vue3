// test_api module 里的测试接口 mock
export default [
	{
		url: '/api/get_test',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/get_test 测试数据'
			}
		}
	},
	{
		url: '/api/get_test/222',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/get_test/:id 测试数据'
			}
		}
	},
	{
		url: '/api/get_test/three?is=param',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/get_test/three 测试数据'
			}
		}
	}
]