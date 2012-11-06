(function() {
  "use strict";
  describe('Collapsing', function() {
    beforeEach(function() {
      this.fixture = $('.checkbox-tree').clone();
    });

    it("default expand: should expand branches with checked leaves", function() {
      this.fixture.checkboxTree({});

      var toggle = this.fixture.find('#branch1').siblings('span');
      expect(toggle.length).to.be(1);
      expect(toggle.hasClass('expanded')).to.be(true);

      var toggle2 = this.fixture.find('#branch2').siblings('span');
      expect(toggle2.length).to.be(1);
      expect(toggle2.hasClass('expanded')).to.be(false);
    });

    it("single branch mode: should keep only one branch open", function() {
      this.fixture.checkboxTree({singleBranchOpen: true});
      var toggle = this.fixture.find('#branch1').siblings('span');
      var toggle2 = this.fixture.find('#branch2').siblings('span');
      toggle2.click();
      expect(toggle.hasClass('expanded')).to.be(false);
      expect(toggle2.hasClass('expanded')).to.be(true);
    });

  });

  describe('Checkbox tree functionality', function() {
    beforeEach(function() {
      this.fixture = $('.checkbox-tree').clone();
    });

  });

}).call(this);