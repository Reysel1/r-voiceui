CreateThread(function()
     while true do
          local hablando = NetworkIsPlayerTalking(PlayerId())
          local statusradio = LocalPlayer.state['radioChannel']
          SendNUIMessage({
               talking = hablando,
               talkingradio = statusradio,
               freq = Shared.Freq
          })
       Wait(1000)
     end
end)