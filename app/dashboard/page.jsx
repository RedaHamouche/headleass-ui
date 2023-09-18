import Dynamic from '../../dynamicTemplating/Dynamic'
import pageApiData from './pageApiData.json'

export default function Dashboard() {
  return (
        <Dynamic
          _self={[]}
          {...pageApiData}
        />
  )
}
