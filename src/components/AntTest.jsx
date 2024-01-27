import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Switch, Space, DatePicker, Card, List } from 'antd'
import { OurProductsData } from '../constants/hero'

const AntTest = () => {
	return (
		<section>
			<h1>ANT</h1>
			<DatePicker />
			<Space direction='vertical'>
				<Switch
					checkedChildren='START'
					unCheckedChildren='STOP'
					defaultChecked
				/>
				<Switch checkedChildren='1' unCheckedChildren='0' />
				<Switch
					checkedChildren={<CheckOutlined />}
					unCheckedChildren={<CloseOutlined />}
					defaultChecked
				/>
			</Space>

			<List
				grid={{
					gutter: 16,
					column: 4,
				}}
				bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
				dataSource={OurProductsData}
				renderItem={item => (
					<List.Item>
						<Card title={item.title}>
							<img src={item.img} />
						</Card>
					</List.Item>
				)}
			/>
		</section>
	)
}

export default AntTest
