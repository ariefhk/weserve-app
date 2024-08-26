import React from "react"
import EcosystemDescriptionLink from "./ecosystem-description-link"
import EcosystemDescriptionList from "./ecosystem-description-list"
import { EcosystemDescriptionTitle } from "./ecosystem-description-title"

const EcosystemDescription = () => {
  return (
    <div className="flex flex-col text-left gap-y-10 basis-2/4">
      <EcosystemDescriptionTitle />
      <EcosystemDescriptionList />
      <EcosystemDescriptionLink />
    </div>
  )
}

export { EcosystemDescription }
