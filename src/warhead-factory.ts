import {
  WarheadClaimed as WarheadClaimedEvent,
  WarheadCreated as WarheadCreatedEvent,
  WarheadCreatedWithReceiver as WarheadCreatedWithReceiverEvent,
  WarheadDropped as WarheadDroppedEvent
} from "../generated/WarheadFactory/WarheadFactory"
import {
  WarheadClaimed,
  WarheadCreated,
  WarheadCreatedWithReceiver,
  WarheadDropped
} from "../generated/schema"

export function handleWarheadClaimed(event: WarheadClaimedEvent): void {
  let entity = new WarheadClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.warheadId = event.params.warheadId
  entity.claimer = event.params.claimer
  entity.claimedAt = event.params.claimedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWarheadCreated(event: WarheadCreatedEvent): void {
  let entity = new WarheadCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.warheadId = event.params.warheadId
  entity.dropper = event.params.dropper
  entity.warheadAddress = event.params.warheadAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWarheadCreatedWithReceiver(
  event: WarheadCreatedWithReceiverEvent
): void {
  let entity = new WarheadCreatedWithReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.warheadId = event.params.warheadId
  entity.dropper = event.params.dropper
  entity.warheadAddress = event.params.warheadAddress
  entity.targetReceiver = event.params.targetReceiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWarheadDropped(event: WarheadDroppedEvent): void {
  let entity = new WarheadDropped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.warheadId = event.params.warheadId
  entity.targetLat = event.params.targetLat
  entity.targetLong = event.params.targetLong
  entity.impactTime = event.params.impactTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
