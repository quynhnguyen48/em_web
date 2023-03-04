import DataItem from "components/DataItem"
import Drawer from "components/Drawer"
import { useEffect, useState } from "react"
import { getExtraMembers } from "services/api/card"
import { getStrapiMedia } from "utils/media"

const ListMembersInCard = ({ cardId, openDrawer, onClose }) => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getExtraMembers(cardId)
        setMembers(res?.data)
      } catch (error) {}
    })()
  }, [cardId])

  return (
    <Drawer open={openDrawer} onClose={onClose}>
      <DataItem icon="2-user" title="Members" value={`${members?.length || 0} members`} />
      <div className="mt-10 flex flex-col gap-y-4">
        {Array.isArray(members) &&
          members?.map(({ id, member }) => (
            <div key={id} className="p-6 bg-primary/10 rounded-xl flex items-center gap-x-4">
              <img
                className="w-20 h-20 rounded-full"
                src={getStrapiMedia({ url: member?.avatar })}
                alt="avatar"
              />
              <div className="space-y-[7px]">
                <p className="font-bold text-18">{`${member?.firstName} ${member?.lastName}`}</p>
                <p className="text-14">{member?.email}</p>
                <p className="font-bold text-14">{member?.phone}</p>
              </div>
            </div>
          ))}
      </div>
    </Drawer>
  )
}

export default ListMembersInCard
