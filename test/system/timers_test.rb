require "application_system_test_case"

class TimersTest < ApplicationSystemTestCase
  setup do
    @timer = timers(:one)
  end

  test "visiting the index" do
    visit timers_url
    assert_selector "h1", text: "Timers"
  end

  test "should create timer" do
    visit timers_url
    click_on "New timer"

    fill_in "Name", with: @timer.name
    click_on "Create Timer"

    assert_text "Timer was successfully created"
    click_on "Back"
  end

  test "should update Timer" do
    visit timer_url(@timer)
    click_on "Edit this timer", match: :first

    fill_in "Name", with: @timer.name
    click_on "Update Timer"

    assert_text "Timer was successfully updated"
    click_on "Back"
  end

  test "should destroy Timer" do
    visit timer_url(@timer)
    click_on "Destroy this timer", match: :first

    assert_text "Timer was successfully destroyed"
  end
end
