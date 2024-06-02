import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { WarheadClaimed } from "../generated/schema"
import { WarheadClaimed as WarheadClaimedEvent } from "../generated/WarheadFactory/WarheadFactory"
import { handleWarheadClaimed } from "../src/warhead-factory"
import { createWarheadClaimedEvent } from "./warhead-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let warheadId = BigInt.fromI32(234)
    let claimer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let claimedAt = BigInt.fromI32(234)
    let newWarheadClaimedEvent = createWarheadClaimedEvent(
      warheadId,
      claimer,
      claimedAt
    )
    handleWarheadClaimed(newWarheadClaimedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("WarheadClaimed created and stored", () => {
    assert.entityCount("WarheadClaimed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WarheadClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "warheadId",
      "234"
    )
    assert.fieldEquals(
      "WarheadClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WarheadClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimedAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
