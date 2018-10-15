let Cell = require('../src/cell.js')

describe('cell', function() {
  let cell

  beforeEach(function() {
    cell = new Cell
  })

  describe('instantiation', function() {
    it('is dead by default', function() {
      expect(cell.life).toEqual(false)
    })
  })

  describe('check', function() {
    beforeEach(function() {
      spyOn(cell, 'aliveCheck')
      spyOn(cell, 'deadCheck')
    })
    it('calls aliveCheck if alive', function() {
      cell.life = true
      cell.check(3)
      expect(cell.aliveCheck).toHaveBeenCalledWith(3)
    })

    it('calls deadCheck if dead', function() {
      cell.life = false
      cell.check(3)
      expect(cell.deadCheck).toHaveBeenCalledWith(3)
    })
  })

  describe('aliveCheck', function() {
    beforeEach(function() { cell.life = true})

    it('does nothing if 2-3 neighbours alive', function() {
      cell.aliveCheck(2)
      expect(cell.life).toEqual(true)
      cell.aliveCheck(3)
      expect(cell.life).toEqual(true)
    })

    it('dies due to underpopulation', function() {
      cell.aliveCheck(1)
      expect(cell.life).toEqual(false)
    })

    it('dies dies due to overpopulation', function() {
      cell.aliveCheck(4)
      expect(cell.life).toEqual(false)
    })
  })

  describe('deadCheck', function() {
    beforeEach(function() { cell.life = false})

    it('it becomes alive if alive neighbours 3', function() {
      cell.deadCheck(3)
      expect(cell.life).toEqual(true)
    })

    it('stays dead otherwise', function() {
      cell.deadCheck(6)
      expect(cell.life).toEqual(false)
    })
  })
})
