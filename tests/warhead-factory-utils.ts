import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  WarheadClaimed,
  WarheadCreated,
  WarheadCreatedWithReceiver,
  WarheadDropped
} from "../generated/WarheadFactory/WarheadFactory"

export function createWarheadClaimedEvent(
  warheadId: BigInt,
  claimer: Address,
  claimedAt: BigInt
): WarheadClaimed {
  let warheadClaimedEvent = changetype<WarheadClaimed>(newMockEvent())

  warheadClaimedEvent.parameters = new Array()

  warheadClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "warheadId",
      ethereum.Value.fromUnsignedBigInt(warheadId)
    )
  )
  warheadClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  warheadClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedAt",
      ethereum.Value.fromUnsignedBigInt(claimedAt)
    )
  )

  return warheadClaimedEvent
}

export function createWarheadCreatedEvent(
  warheadId: BigInt,
  dropper: Address,
  warheadAddress: Address
): WarheadCreated {
  let warheadCreatedEvent = changetype<WarheadCreated>(newMockEvent())

  warheadCreatedEvent.parameters = new Array()

  warheadCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "warheadId",
      ethereum.Value.fromUnsignedBigInt(warheadId)
    )
  )
  warheadCreatedEvent.parameters.push(
    new ethereum.EventParam("dropper", ethereum.Value.fromAddress(dropper))
  )
  warheadCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "warheadAddress",
      ethereum.Value.fromAddress(warheadAddress)
    )
  )

  return warheadCreatedEvent
}

export function createWarheadCreatedWithReceiverEvent(
  warheadId: BigInt,
  dropper: Address,
  warheadAddress: Address,
  targetReceiver: Address
): WarheadCreatedWithReceiver {
  let warheadCreatedWithReceiverEvent = changetype<WarheadCreatedWithReceiver>(
    newMockEvent()
  )

  warheadCreatedWithReceiverEvent.parameters = new Array()

  warheadCreatedWithReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "warheadId",
      ethereum.Value.fromUnsignedBigInt(warheadId)
    )
  )
  warheadCreatedWithReceiverEvent.parameters.push(
    new ethereum.EventParam("dropper", ethereum.Value.fromAddress(dropper))
  )
  warheadCreatedWithReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "warheadAddress",
      ethereum.Value.fromAddress(warheadAddress)
    )
  )
  warheadCreatedWithReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "targetReceiver",
      ethereum.Value.fromAddress(targetReceiver)
    )
  )

  return warheadCreatedWithReceiverEvent
}

export function createWarheadDroppedEvent(
  warheadId: BigInt,
  targetLat: BigInt,
  targetLong: BigInt,
  impactTime: BigInt
): WarheadDropped {
  let warheadDroppedEvent = changetype<WarheadDropped>(newMockEvent())

  warheadDroppedEvent.parameters = new Array()

  warheadDroppedEvent.parameters.push(
    new ethereum.EventParam(
      "warheadId",
      ethereum.Value.fromUnsignedBigInt(warheadId)
    )
  )
  warheadDroppedEvent.parameters.push(
    new ethereum.EventParam(
      "targetLat",
      ethereum.Value.fromSignedBigInt(targetLat)
    )
  )
  warheadDroppedEvent.parameters.push(
    new ethereum.EventParam(
      "targetLong",
      ethereum.Value.fromSignedBigInt(targetLong)
    )
  )
  warheadDroppedEvent.parameters.push(
    new ethereum.EventParam(
      "impactTime",
      ethereum.Value.fromUnsignedBigInt(impactTime)
    )
  )

  return warheadDroppedEvent
}
