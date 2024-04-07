import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import toast from 'react-hot-toast'

const Dropdown = ({ selectedTags, setSelectedTags, tags }) => {
  const handleSelect = (tag) => {
    const isPresent = selectedTags.find((innerTag) => innerTag == tag)
    if (isPresent) {
      setSelectedTags(selectedTags.filter((innerTag) => innerTag !== isPresent))
      return
    }
    if (!isPresent && selectedTags.length < 2) {
      setSelectedTags((prevState) => [...prevState, tag])
    } else {
      toast.error('Max 2 Elements')
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-[30%] min-w-[150px] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" overflow-y-auto h-[400px] absolute right-0 bottom-[40px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {tags.map((tag) => <div className="border-y-[0.25px] border-gray-100" key={tag} onClick={() => { handleSelect(tag) }}>
            <Menu.Item>

              <p className={`${selectedTags.includes(tag) ? 'bg-gray-100' : ''} text-gray-900 block pl-4 pr-2 py-2 text-sm`}>
                {tag}
              </p>


            </Menu.Item>

          </div>)}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown