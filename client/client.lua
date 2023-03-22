RegisterCommand('burgershot:ui', function()
    SendNuiMessage({
        action = 'setVisible',
        data = true,
    })

    SetNuiFocus(true, true)
end)

RegisterNUICallback('hideUI', function(_, cb)
    cb({})
    SetNuiFocus(false, false)
end)