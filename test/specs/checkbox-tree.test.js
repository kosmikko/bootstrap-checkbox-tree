(function() {
  "use strict";
  describe('Plugin options', function() {
    beforeEach(function() {
      this.fixture = $('.checkbox-tree').clone();
    });

    it("should expand branches with checked leaves", function() {
      this.fixture.checkboxTree({});

      var toggle = this.fixture.find('#branch1').siblings('span');
      expect(toggle.length).to.be(1);
      expect(toggle.hasClass('expanded')).to.be.ok;

      var toggle2 = this.fixture.find('#branch2').siblings('span');
      expect(toggle2.length).to.be(1);
      expect(toggle2.hasClass('expanded')).to.be.false;
    });

  });
}).call(this);