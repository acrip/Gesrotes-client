import { Breadcrumb } from './Breadcrumb'
import { CoordinadorCard } from './CoordinadorCard'

function MainHeader() {
  return (
    <div className="h-20 flex justify-between mt-5 mr-5 bg-white-soft rounded-xl border">
      <Breadcrumb />
      <CoordinadorCard/>
    </div>
  )
}

export { MainHeader }